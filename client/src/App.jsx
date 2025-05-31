import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './routes/Approutes'

function App() {

  return (
    <>
  <div>
  <AuthProvider><AppRoutes></AppRoutes></AuthProvider>
  </div>
</>

  )
}
export default App
