import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AdminLogin from '../Pages/AdminLogin'
import Dashobord from '../Pages/Dashobord'
import ForgetPasswd from '../Pages/ForgetPasswd'
import Fans from '../Pages/Fans'
import Coach from '../Pages/Coach'
import Player from '../Pages/Player'
const AppRouter = () => {
  // const [token, setToken] = useState();

  // if (token) {
  //   return <AdminLogin setToken={setToken} />
  // }
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/dashbord' element={<Dashobord/>}/>
        <Route path='/forgetpasswd' element={<ForgetPasswd/>}/>
        <Route path='/fans' element={<Fans/>}/>
        <Route path='/coach' element={<Coach/>}/>
        <Route path='/player' element={<Player/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter