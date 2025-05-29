import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Developerspage from './pages/Developerspage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Developerspage></Developerspage>
      </div>
    </>
  )
}

export default App
