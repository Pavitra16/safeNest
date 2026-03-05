
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Footer from './components/layout/Footer'
import UserProfile from './pages/UserProfile/UserProfile'
import JobScanner from './pages/JobScanner/JobScanner'
import CourseChecker from './pages/CourseChecker/CourseChecker'
import WebsiteChecker from './pages/WebsiteChecker/WebsiteChecker'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/jobscanner' element={<JobScanner/>}/>
        <Route path='/courses' element={<CourseChecker/>}/>
        <Route path='/website' element={<WebsiteChecker/>}/>
        
        

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

