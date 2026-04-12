import { useState } from 'react'
import SplashScreen from './SplashScreen'
import Confetti from './components/Confetti'
import Stars from './components/Stars'
import Header from './components/header/header'
import Brous from './components/Brous/Brous'
import Recuerdos from './components/recuerdos/recuerdos'
import Carta from './components/carta/Carta'
import PaEmi from './components/PaEmi/Pa_Emi'
import './App.css'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [showModal, setShowModal] = useState(false)

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
          <Carta />

          {/* ── Pa' Emi section ── */}
          <section id="pa-emi" className="paemi-section">
            <h2 className="paemi-section__title">¿Pa' quién es esto?</h2>
            <button className="paemi-section__btn" onClick={() => setShowModal(true)}>
              Pa' el Emi&nbsp;🎂
            </button>
          </section>

          {showModal && <PaEmi onClose={() => setShowModal(false)} />}
        </>
      )}
    </>
  )
}

export default App

