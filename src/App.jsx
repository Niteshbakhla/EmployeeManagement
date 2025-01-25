import { useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeeDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      <EmployeDashboard />
    </>
  )
}

export default App
