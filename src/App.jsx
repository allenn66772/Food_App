
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Common/pages/Landingpage'
import Contact from './Common/pages/Contact'
import Auth from './Common/pages/Auth'
import Pnf from './Common/pages/Pnf'
import Userhome from './User/pages/Userhome'
import Cart from './User/pages/Cart'
import Profile from './User/pages/Profile'
import Addfood from './Hotel/pages/Addfood'
import Orders from './Hotel/pages/Orders'
import LoginAs from './Common/pages/LoginAs'

function App() {
  

  return (
    <>
    <Routes>
    {/* Admin */}

    {/* Common */}
    <Route path='/' element={<Landingpage/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path="/login" element={<Auth/>}/>
    <Route path='/register' element={<Auth register/>}/>
    <Route path='*' element={<Pnf/>}/>
    <Route path='/loginas' element={<LoginAs/>}/>

    {/* User */}
    <Route path='/user-home' element={<Userhome/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/profile' element={<Profile/>}/>

    {/* Hotel */}
    <Route path='/add-food' element={<Addfood/>}/>
    <Route path='/orders' element={<Orders/>}/>

    </Routes>
    </>
  )
}

export default App
