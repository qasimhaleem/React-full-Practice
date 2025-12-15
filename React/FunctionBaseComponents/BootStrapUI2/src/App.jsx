import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'
import BasicExample from './Components/ProfileCard'
import Base from './Components/FullWebsite/Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Base />
    </>
  )
}

export default App
