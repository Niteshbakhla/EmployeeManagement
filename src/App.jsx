import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import LoginPage from './components/Auth/Logins'
import AdminPanel from './components/Dashboard/AdminDashboard'
import AllTasks from './others/AllTasks'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

function App() {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  }, [])

  return (
    <>
      <Login />
      {/* <EmployeDashboard /> */}

      <AdminPanel />
      {/* <AllTasks /> */}


    </>
  )
}

export default App
