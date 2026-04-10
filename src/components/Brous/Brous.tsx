import { useState, useEffect } from 'react'
import { BIRTHDAY_DATE, calcularEdad } from '../../utils/birthday'
import './Brous.css'

const PHOTOS = [
  '/images/WhatsApp Image 2026-04-09 at 3.39.14 PM (1).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.14 PM (2).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.14 PM (3).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.14 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.15 PM (1).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.15 PM (2).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.39.15 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.12 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.13 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.14 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.18 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (1).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (2).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (3).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (4).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (5).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (6).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM (7).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 3.50.19 PM.jpeg',
  '/images/WhatsApp Image 2026-04-09 at 6.01.27 PM (1).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 6.01.27 PM (2).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 6.01.27 PM (3).jpeg',
  '/images/WhatsApp Image 2026-04-09 at 6.01.27 PM.jpeg',
]

const DISPLAY_MS = 4000
const TRANSITION_MS = 380

type Phase = 'visible' | 'exiting' | 'entering'

export default function Brous() {
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
    <section id="brous" className="brous">

      {preloadSrc && (
        <img src={preloadSrc} alt="" aria-hidden="true" className="brous__preloader" />
      )}

      <div className="brous__message">
        <span className="brous__tag">Para el Emi</span>
        <h2 className="brous__title">¡Feliz cumpleaños,<br />Emiliano!</h2>
        <p className="brous__text">
          Bro, hoy es tu día y no podía dejarlo pasar sin decirte lo mucho que
          me alegra tenerte como amigo. Eres de esas personas que hacen que
          todo sea más divertido, más genuino y más chido, por eso te quiero pto.
        </p>
        <p className="brous__text">
          Que este año te traiga todo lo que mereces —y te mereces un chingo—.
          Celebra fuerte, disfrútalo al máximo y sabe que aquí estamos para lo
          que sea. ¡Feliz cumpleaños!&nbsp;🎉
        </p>
        <div className="brous__badge">🎂 {calcularEdad(BIRTHDAY_DATE)} añitos 🎂</div>
      </div>

      {/* Photo slideshow */}
      <div className="brous__gallery">
        <div className="brous__frame">
          <img
            src={PHOTOS[idx]}
            alt={`Foto ${idx + 1} de ${PHOTOS.length}`}
            className={`brous__photo brous__photo--${phase}`}
          />
          <div className="brous__dots">
            {PHOTOS.map((_, i) => (
              <span
                key={i}
                className={`brous__dot${i === idx ? ' brous__dot--active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
