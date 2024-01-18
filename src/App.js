import { Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import SavedMovies from './components/Movies/SavedMovies/SavedMovies';
import Header from './components/Header/Header';
import { useState } from 'react';

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerClick() {
    setIsBurgerMenuOpen(true);
  }

  function closeBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <>
      <Header class={"header-langing"}
        classIcon={"profile__icon_landing"}
        isBurgerOpen={isBurgerMenuOpen}
        onBurgerOpen={handleBurgerClick}
        onClose={closeBurgerMenu} />
      <Routes>
        <Route path='/' element={<Main
          class={"header-langing"}
          classIcon={"profile__icon_landing"}
          isBurgerOpen={isBurgerMenuOpen}
          onBurgerOpen={handleBurgerClick}
          onClose={closeBurgerMenu}
        />}
        />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
