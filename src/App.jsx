import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SignUpDeveloper from './pages/SignUpDeveloper'
import SignUpCompany from './pages/SignUpCompany'
import LoginForm from './pages/LoginForm'
import DeveloperList from './pages/DeveloperList'
import DeveloperProfile from './pages/DeveloperProfile'




function App() {

  const [users, setUsers] = useState([])
    const fetchUserData = () => {

        fetch("http://127.0.0.1:8000/api/developers/")
          .then(response => { 
            return response.json()
          })
          .then(data => {
            console.log(data)
            setUsers(data)
          })
      }

    useEffect(() => {
        fetchUserData()
    }, [])


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register/developer" element={<SignUpDeveloper />} />
        <Route path="/register/company" element={<SignUpCompany />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/developers" element={<DeveloperList users={users}/>} />
        <Route path="/developers/:id" element={<DeveloperProfile />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
