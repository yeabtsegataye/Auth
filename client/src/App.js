import { BrowserRouter ,Route,Routes ,Navigate} from 'react-router-dom';
// import {UseAuthContext} from './hook/useAuthContext'
// import {useState, useEffect} from 'react'

import {useValidator} from './hook/useValidator'
import './App.css';

// pages & components
import Login from './components/login';
import Signup from './components/signup';
import {Nave} from './components/nav'
import Home from './pages/home'
import {Profile} from './pages/profile'

function App() {
  const {valid} = useValidator()
  console.log('this is the state',valid)

  return (
      <BrowserRouter>
       <Nave />
        <Routes>
          <Route path='/' element={!valid ? <Login /> : <Navigate to='/profile'/>}/>
          <Route path='/signup' element={!valid ? <Signup /> : <Navigate to ='/profile'/>}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/profile' element={valid ? <Profile /> : <Navigate to ='/signup'/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
