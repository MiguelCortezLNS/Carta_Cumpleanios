import { useState, useEffect } from 'react'
import './recuerdos.css'

const BASE = import.meta.env.BASE_URL

const PHOTOS = [
  `${BASE}images/bros.jpg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.14 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.14 PM (1).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.14 PM (2).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.14 PM (3).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.15 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.15 PM (1).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.39.15 PM (2).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.12 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.13 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.14 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.18 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (1).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (2).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (3).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (4).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (5).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (6).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 3.50.19 PM (7).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 6.01.27 PM.jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 6.01.27 PM (1).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 6.01.27 PM (2).jpeg`,
  `${BASE}images/WhatsApp Image 2026-04-09 at 6.01.27 PM (3).jpeg`,
]

const DISPLAY_MS = 2000
const TRANSITION_MS = 380

type Phase = 'visible' | 'exiting' | 'entering'

export default function Recuerdos() {
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('entering')
  const [preloadSrc, setPreloadSrc] = useState<string | null>(null)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (phase === 'entering') {
      timer = setTimeout(() => setPhase('visible'), TRANSITION_MS)
    } else if (phase === 'visible') {
      const nextIdx = (idx + 1) % PHOTOS.length
      timer = setTimeout(() => {
        setPreloadSrc(PHOTOS[nextIdx])
        setPhase('exiting')
      }, DISPLAY_MS)
    } else if (phase === 'exiting') {
      timer = setTimeout(() => {
        setIdx(prev => (prev + 1) % PHOTOS.length)
        setPhase('entering')
      }, TRANSITION_MS)
    }

    return () => clearTimeout(timer)
  }, [phase, idx])

  return (
    <section id="recuerdos" className="recuerdos">
      <div className="recuerdos__bg" aria-hidden="true" />

      <div className="recuerdos__overlay" aria-hidden="true" />

      {preloadSrc && (
        <img src={preloadSrc} alt="" aria-hidden="true" className="recuerdos__preloader" />
      )}

      <div className="recuerdos__inner">
        <div className="recuerdos__heading">
          <h2 className="recuerdos__title">Recuerdos</h2>
          <p className="recuerdos__subtitle">Algunos momentos que quedaron grabados</p>
        </div>

        <div className="recuerdos__frame">
          <img
            src={PHOTOS[idx]}
            alt={`Recuerdo ${idx + 1} de ${PHOTOS.length}`}
            className={`recuerdos__photo recuerdos__photo--${phase}${PHOTOS[idx] === '/images/bros.jpg' ? ' recuerdos__photo--contain' : ''}`}
          />
        </div>
      </div>
    </section>
  )
}
