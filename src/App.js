/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';

import { getMovies } from './utils/MovieApi';

import CurrentUserContext from '../src/contexts/CurrentUserContext';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SavedMovies from './components/Movies/SavedMovies/SavedMovies';
import Header from './components/Header/Header';
import mainApi from './utils/MainApi';

import { REQUEST_MESSAGE } from './utils/config';


function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const headerExist = ['/movies', '/saved-movies', '/profile'];
  const headerLanding = ['/'];

  /*для подключения заголовка только на нужных вкладках*/
  const headerVisible = headerExist.includes(location.pathname);
  const headerLandingVisible = headerLanding.includes(location.pathname);

  const [currentUser, setCurrentUser] = useState('');

  const [isLogged, setIsLogged] = useState(true);
  const [searchError, setSearchError] = useState('')
  const [savedMovies, setSavedMovies] = useState(() => {
    const movieList = localStorage.getItem('saved-movies');
    return movieList ? JSON.parse(movieList) : [];
  });
  //запрос поиска
  const [query, setQuery] = useState(() => {
    const queryList = localStorage.getItem('search-movie');
    return queryList ? JSON.parse(queryList) : [] ;
  });
  const [movies, setMovies] = useState([]);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  //для обновления профиля
  const [isEditProfileLoading, setIsEditProfileLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');

  //функции для работы бургер меню
  function handleBurgerClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }
  //---------------------------------

  //получение карточек с сервера
  useEffect(() => {
    if (isLogged) {
      getMovies()
        .then((res) => {
          setMovies(res)
          if (res.length === 0) {
            setSearchError('Ничего не найдено');
          }
        })
        .catch((err) => {
          setSearchError(`Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз`)
          console.log(`Ошибка подрузки фильмов: ${err}`)
        })
    }
  }, [isLogged])

  //получение данных пользователя
  useEffect(() => {
    if (isLogged) {
      mainApi.getUserInfo()
        .then((res) => {
          localStorage.setItem('userInfo', JSON.stringify(res));

          setCurrentUser(res);
        })
        .catch((err) => console.log(`Ошибка получения данных пользователя ${err}`))
    }
  }, [setCurrentUser])

  //проверка токена и переадресация при повторном входе
  const checkToken = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLogged(true);
          }
        })
        .catch((err) => console.log("Ошибка проверки токена:", err))
    }
  }, [setIsLogged, handleLogin])

  /*проверка токена*/
  useEffect(() => {
    checkToken();
  }, [navigate])


  //регистрация и присвоение данных пользователя
  function handleRegister(dataRegister) {
    mainApi.register(dataRegister)
      .then((res) => {
        if (res) {
          navigate("/signin");
        }
      })
      .catch((err) => console.log(`Ошибка регистрации пользователя ${err}`))
  }

  //авторизация
  function handleLogin(dataLogin) {
    mainApi.login(dataLogin)
      .then(() => {
        setIsLogged(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => console.log(`Ошибка авторизации пользователя ${err}`))
  }

  //выход из системы
  function signOut() {
    localStorage.clear();
    setIsLogged(false);
    setCurrentUser({});
    navigate("/signin", { replace: true });
  }

  //обновление данных пользователя
  function handleUpdateUser(data) {
    setIsEditProfileLoading(true);
    mainApi.setUserInfo(data)
      .then((newUser) => {
        setMessageStatus(REQUEST_MESSAGE.PROFILE_SUCCESSULLY);
        setCurrentUser(newUser);
        localStorage.setItem('userInfo', JSON.stringify(newUser));
      })
      .catch((err) => {
        setMessageStatus(REQUEST_MESSAGE.ERROR_PROFILE_500);
        console.log(`Ошибка обновления данных пользователя ${err}`)
      })
      .finally(() => setIsEditProfileLoading(false))
  }

  //сохранение фильма
  function handleSaveMovie(movie) {
    mainApi.saveMovie({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      owner: movie.owner,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    })
      .then((res) => {
        setSavedMovies([res, ...savedMovies])
      })
  }

  //удаление фильма
  function handleRemove(movie) {
    const movieToDelete = savedMovies.find((element) =>
      element._id === movie._id || element.id === movie.movieId)

    mainApi.deleteMovie(movieToDelete._id)
      .then(() => {
        let newArray;
        if (movie._id) {
          newArray = savedMovies.filter(
            (c) => c._id !== movie._id)
        } else {
          newArray = savedMovies.filter(
            (c) => c.movieId !== movie.id)
        }
        setSavedMovies(newArray);
      })
      .catch((err) => console.log(`Ошибка удаления фильма ${err}`))
  }

  //фильтрация по названию
  function searchMovies(query, movieslist) {
    movieslist = movieslist.filter((movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase())
    )
    return movieslist;
  }

  //функция обработки запроса
  function handleFilerMovies(e) {
    e.preventDefault();
    const inputSearch = e.target.search_movie.value;
    setQuery(searchMovies(inputSearch, movies));
    return query;
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>

      {headerVisible && <Header isBurgerOpen={isBurgerMenuOpen}
        onBurgerOpen={handleBurgerClick}
        onClose={closeBurgerMenu}
        isLogged={isLogged} />}

      {headerLandingVisible && <Header class={"header-langing"}
        classIcon={"navigation-profile__icon_landing"}
        isBurgerOpen={isBurgerMenuOpen}
        onBurgerOpen={handleBurgerClick}
        onClose={closeBurgerMenu}
        isLogged={isLogged} />}

      <Routes>
        <Route path='/' element={<Main
          class={"header-langing"}
          classIcon={"navigation-profile__icon_landing"}
          isBurgerOpen={isBurgerMenuOpen}
          onBurgerOpen={handleBurgerClick}
          onClose={closeBurgerMenu}
        />}
        />
        <Route path='/signup' element={<Register onRegister={handleRegister} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        <Route path='/movies' element={<Movies movies={movies}
          savedMovies={savedMovies}
          onSave={handleSaveMovie}
          onRemove={handleRemove}
          onFilter={handleFilerMovies}
          query={query}
          searchError={searchError}
        />} />

        <Route path='/saved-movies' element={<SavedMovies movies={savedMovies}
          onRemove={handleRemove}
          onFilter={handleFilerMovies}

          query={query} />}
        />
        <Route path='/profile' element={<Profile onUpdateUser={handleUpdateUser}
          signOut={signOut}
          isLoading={isEditProfileLoading}
          messageStatus={messageStatus} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>

  );
}

export default App;
