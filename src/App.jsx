import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footter from './Components/Footter'
import Home from './Components/Home/Home'
import Store from './Pages/Store'
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import AllShops from './Components/Shop/AllShops'
import Blogs from './Components/Blogs/Blogs'
import ContactUs from './Components/Contact/ContactUs'
import AddCart from './Pages/AddCart'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/store' element={<Store />} />
          <Route path='/shop' element={<AllShops/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/cart' element={<AddCart/>} />
        </Routes>
        <Footter />
      </BrowserRouter>
    </>
  )
}

export default App
