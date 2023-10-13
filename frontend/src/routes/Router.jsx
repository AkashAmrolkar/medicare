import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Services from '../pages/Services'
import SignUp from '../pages/SignUp'
import Doctors from '../pages/doctors/Doctors'
import DoctorDetails from '../pages/doctors/DoctorDetails'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/services' element={<Services />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      </Routes>
    </>
  )
}

export default Routers