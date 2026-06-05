import { useState } from 'react'
import heroImage from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Mercado Laguna" className="base" />
      </section>

      <h1>Mercado Laguna</h1>
      
      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <p>
        Welcome to Mercado Laguna - Your digital marketplace solution
      </p>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
        Built with React 19 and Vite for optimal performance
      </p>
    </>
  )
}

export default App
