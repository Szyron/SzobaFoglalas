import './App.css'
import { Navigate,BrowserRouter,Route,Routes } from 'react-router-dom'
import Rent from './components/Rent'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

function App() {

  return (
      <div>
        <BrowserRouter>
        <Menu/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/calculator" element={<Rent/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
  )
}

export default App
