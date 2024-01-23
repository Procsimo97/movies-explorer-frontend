import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovies } from './utils/MovieApi';

import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SavedMovies from './components/Movies/SavedMovies/SavedMovies';
import Header from './components/Header/Header';
import { useResize } from './utils/windowSize';


function App() {

  const location = useLocation();
  const headerExist = ['/movies', '/saved-movies', '/profile'];
  const headerLanding = ['/'];
  const currentWidth = useResize();
  /*для подключения заголовка только на нужных вкладках*/
  const headerVisible = headerExist.includes(location.pathname);
  const headerLandingVisible = headerLanding.includes(location.pathname);

  const [isLogged, setIsLogged] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

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
  }, [currentWidth])

  return (
    <>
      {headerVisible && <Header isBurgerOpen={isBurgerMenuOpen}
        onBurgerOpen={handleBurgerClick}
        onClose={closeBurgerMenu} />}

      {headerLandingVisible && <Header class={"header-langing"}
        classIcon={"navigation-profile__icon_landing"}
        isBurgerOpen={isBurgerMenuOpen}
        onBurgerOpen={handleBurgerClick}
        onClose={closeBurgerMenu} />}

      <Routes>
        <Route path='/' element={<Main
          class={"header-langing"}
          classIcon={"navigation-profile__icon_landing"}
          isBurgerOpen={isBurgerMenuOpen}
          onBurgerOpen={handleBurgerClick}
          onClose={closeBurgerMenu}
        />}
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<Movies movies={movies}
        />} />

        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
