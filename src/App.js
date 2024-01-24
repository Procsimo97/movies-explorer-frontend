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
//import { useResize } from './utils/windowSize';
import mainApi from './utils/MainApi';


function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const headerExist = ['/movies', '/saved-movies', '/profile'];
  const headerLanding = ['/'];
 // const currentWidth = useResize();

  const token = localStorage.getItem('jwt');

  /*для подключения заголовка только на нужных вкладках*/
  const headerVisible = headerExist.includes(location.pathname);
  const headerLandingVisible = headerLanding.includes(location.pathname);

  const [currentUser, setCurrentUser] = useState('');
  const [isLogged, setIsLogged] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

   console.log(movies);

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
        })
        .catch((err) => {
          console.log(`Ошибка подрузки фильмов: ${err}`)
        })
    }
  }, [isLogged])

  //получение данных пользователя
  useEffect(() => {
    if (isLogged) {
      mainApi.getUserInfo(token)
        .then((res) => setCurrentUser(res))
        .catch((err) => console.log(`Ошибка получения данных пользователя ${err}`))
    }
  }, [isLogged])

  //проверка токена и переадресация при повторном входе
  const checkToken = useCallback(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLogged(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => console.log("Ошибка проверки токена:", err))
    }
  }, [navigate])

  /*проверка токена*/
  useEffect(() => {
    checkToken();
  }, [])


  //регистрация и присвоение данных пользователя
  function handleRegister(dataRegister) {
    mainApi.register(dataRegister)
      .then((res) => {
        if(res) {
          navigate("/singin")
        }
      })
      .catch((err) => console.log(`Ошибка регистрации пользователя ${err}`))
  }

  //регистрация
  function handleLogin(dataLogin) {
    mainApi.login(dataLogin)
      .then(() => {
        setIsLogged(true);
        navigate("/movies")
      })
      .catch((err) => console.log(`Ошибка авторизации пользователя ${err}`))
  }

  //выход из системы
  function signOut() {
    localStorage.removeItem('jwt');
    setIsLogged(false);
    setCurrentUser({});
    navigate("/signin", { replace: true });
  }

  //обновление данных пользователя
  function handleUpdateUser(data) {
    mainApi.setUserInfo(token, data)
      .then((newUser) => setCurrentUser(newUser))
      .catch((err) => console.log(`Ошибка обновления данных пользователя ${err}`))
  }

  //сохранение фильма
  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie, token)
      .then((res) => {
        setSavedMovies([...res])
      })
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
        isLogged={isLogged}  />}

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
        <Route path='/movies' element={<Movies movies={movies} />} />

        <Route path='/saved-movies' element={<SavedMovies movies={savedMovies} 
                                                          onSave={handleSaveMovie}/>} />
        <Route path='/profile' element={<Profile onUpdateUser={handleUpdateUser}
                                                 signOut={signOut} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </CurrentUserContext.Provider>

  );
}

export default App;
