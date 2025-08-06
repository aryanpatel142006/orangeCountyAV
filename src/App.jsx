import { useState } from 'react'
import HeroVideoLoop from './components/heroLoop'
import NavBar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-div'>
      <HeroVideoLoop />
      <NavBar />
      <div className='test'></div>
    </div>

  )
}

export default App
