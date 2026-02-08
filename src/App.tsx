import { useState } from 'react'

import './App.css'
import ValentinePage from './components/ValentinePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ValentinePage />
    </>
  )
}

export default App
