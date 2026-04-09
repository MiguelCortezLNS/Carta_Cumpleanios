import { useState } from 'react'
import SplashScreen from './SplashScreen'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

        <div>
          <h2>¡Feliz cumpleaños, Emi! 🎉</h2>
        </div>
    </>
  )
}

export default App
