import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Astros from './Components/Astros/Astros';
import Apod from './Components/Apod/Apod';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import './App.css' 

// Constante de login
const isLogged = true;
// Guardamos en localStorage

const userData = {
  name: 'Jona',
  age: '25'
}

//Link para personas en el espacio
//Link para API NASA
//Logo / link para login o para ver perfil

//const links = ['astros', 'apod', true];
const links = [
  {
    "name": 'ASTROS',
    "link": 'astros'
  },
  {
    "name": 'APOD',
    "link": 'apod'
  }
]


//NavBar ---------
// Main --- ruta:/
// Astros --- ruta:/astros
// APOD --- ruta:/apod

function App() {
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(isLogged))
  }, [isLogged]);

  return (
    <>
    <Navbar 
    links={links}
    isLogged={JSON.parse(localStorage.login)}

    
    />
    <Routes>
      <Route 
      path='/' 
      element={<Main {...userData}/>}/>

      <Route 
      path='/astros'
      element={<Astros/>}/>

      <Route 
      path='/apod'
      element={<Apod/>}/>
    
      </Routes>
    </>
  )
}

export default App
