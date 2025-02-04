import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footter from './Components/Footter'
import Hero from './Components/Home/Hero'
import Store from './Pages/Store'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Hero />} />
          <Route path='/services' element={'home'} />
          <Route path='/store' element={<Store />} />
          <Route path='/shop' element={'home'} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/contact' element={'home'} />
          <Route path='/login' element={<LogIn/>} />
        </Routes>
        <Footter />
      </BrowserRouter>
    </>
  )
}

export default App
