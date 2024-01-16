import { Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './components/Main/Main';
import Movies from './components/Movies/Movies';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/signin' element={<Login />} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/profile' element={<Profile name={"Анна"}/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
    </>
  );
}

export default App;
