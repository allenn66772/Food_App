
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Common/Landingpage'
import Pnf from './Common/Pnf'
import Adminheader from './admin/Adminheader'
import Adminfooter from './admin/Adminfooter'
import Adminhome from './admin/Adminhome'
import Header from './user/Header'
import Footer from './user/Footer'
import Home from './user/Home'
import Commonheader from './Common/Commonheader'

function App() {


  return (
    <>
      <Routes>
      {/* Common */}
      <Route path='/' element={<Landingpage/>}/>
      <Route path='*' element={<Pnf/>}/>
      <Route path='common-header' element={<Commonheader/>}/>
      {/* Admin */}
      <Route path='admin-header' element={<Adminheader/>}/>
      <Route path='admin-footer' element={<Adminfooter/>}/>
      <Route path='admin-home' element={<Adminhome/>}/>
      {/* user */}
      <Route path='user-header' element={<Header/>}/>
      <Route path='user-footer' element={<Footer/>}/>
      <Route path='user-home' element={<Home/>}/>



      </Routes>




    </>
  )
}

export default App
