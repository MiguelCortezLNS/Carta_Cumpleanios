import { useState } from 'react'
import SplashScreen from './SplashScreen'
import Confetti from './components/Confetti'
import Stars from './components/Stars'
import Header from './components/header/header'
import Brous from './components/Brous/Brous'
import Recuerdos from './components/recuerdos/recuerdos'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <Stars fixed />
      <Confetti fixed />

      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}

      {!showSplash && (
        <>
          <Header />
          <Brous />
          <Recuerdos />
        </>
      )}
    </>
  )
}

export default App
