import React from 'react'
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="container">
      <div className="logos">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <p>Hi, this is SKILL 3 - Applying CI/CD for react project using GitHub Actions</p>
      <p>count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default App
