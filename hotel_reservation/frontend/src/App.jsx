import './App.css'
import { Navigate,BrowserRouter,Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rent from './components/Rent'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import BookingsList from './components/Services/BookingsList'
import { ServiceProvider } from './components/Context/ServiceContext'
import NewRoomType from './components/Room/NewRoomType'
import RoomTypesList from './components/Room/RoomTypesList';
import NewMealPlan from './components/Meal/NewMealPlan'
import MealPlansList from './components/Meal/MealPlansList';


function App() {

  return (
      <div>
        <ServiceProvider>
        <BrowserRouter>
        <Menu/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/calculator" element={<Rent/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/bookings" element={<BookingsList/>}/>
            <Route path="/new-room-type" element={<NewRoomType/>}/>
            <Route path="/room-types" element={<RoomTypesList/>}/>
            <Route path="/new-meal-plan" element={<NewMealPlan/>}/>
            <Route path="/meal-plans" element={<MealPlansList/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
        </ServiceProvider>
        <ToastContainer />
      </div>
  )
}

export default App
