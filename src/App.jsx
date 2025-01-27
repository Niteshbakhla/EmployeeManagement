import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'
import LoginPage from './components/Auth/Logins'
import AdminPanel from './components/Dashboard/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      {/* <EmployeDashboard /> */}

      <AdminPanel />

    </>
  )
}

export default App
