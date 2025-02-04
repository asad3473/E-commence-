import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={'home'} />
          <Route path='/services' element={'home'} />
          <Route path='/shop' element={'home'} />
          <Route path='/contact' element={'home'} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
