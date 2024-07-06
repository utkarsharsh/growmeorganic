import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetail from './components/UserDetail/UserDetail'
import DataComponets from './components/DataComponents/DataComponets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <DataComponets/>
    </>
  )
}

export default App
