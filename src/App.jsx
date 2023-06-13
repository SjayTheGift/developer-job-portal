import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUpDeveloper from './pages/SignUpDeveloper'
import SignUpCompany from './pages/SignUpCompany'
import LoginForm from './pages/LoginForm'




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register/developer" element={<SignUpDeveloper />} />
        <Route path="/register/company" element={<SignUpCompany />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
