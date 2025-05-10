import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myLogo from '/my-logo.png'

import './App.css'
import CatFact from './CatFact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={myLogo} className="logo" alt="My logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Bmw + React</h1>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Bmw and React logos to learn more
      </p>

      <CatFact />
    </>
  )
}

export default App