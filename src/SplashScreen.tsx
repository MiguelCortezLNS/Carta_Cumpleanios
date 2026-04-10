import { useState } from 'react'
import './SplashScreen.css'

// Deterministic positions so values don't change on re-render
const STARS = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${(i * 37.3 + 11) % 100}%`,
  top: `${(i * 53.1 + 7) % 100}%`,
  delay: `${((i * 0.19) % 3).toFixed(2)}s`,
  duration: `${(1.5 + (i * 0.23) % 2).toFixed(2)}s`,
  size: `${2 + (i % 3)}px`,
}))

const CONFETTI_COLORS = ['#ff6b9d', '#ffd93d', '#6bceff', '#a8ff78', '#ffb347', '#c3a1ff', '#ff9a9e']
const CONFETTI = Array.from({ length: 52 }, (_, i) => ({
  id: i,
  left: `${(i * 31.7 + 5) % 100}%`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: `${((i * 0.23) % 5).toFixed(2)}s`,
  duration: `${(3.5 + (i * 0.31) % 4).toFixed(2)}s`,
  size: `${5 + (i % 7)}px`,
  isCircle: i % 3 !== 0,
  rotation: (i * 47) % 360,
}))

const CANDLES = [
  'linear-gradient(to bottom, #ff9a9e, #ff6b6b)',
  'linear-gradient(to bottom, #a8edea, #6bceff)',
  'linear-gradient(to bottom, #ffd93d, #ffb347)',
  'linear-gradient(to bottom, #d4b0f0, #a259d1)',
  'linear-gradient(to bottom, #a8ff78, #56ab2f)',
]

interface Props {
  onDone: () => void
}

// Fecha de nacimiento (año, mes-1, día)
const BIRTHDAY_DATE = new Date(2002, 3, 17) // 17 de abril de 2002

/* Funcion para calcular la edad del cumpleañero segun la fecha de nacimiento */
function calcularEdad(fechaNacimiento: Date): number {
  const hoy = new Date()
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
  const mes = hoy.getMonth() - fechaNacimiento.getMonth()
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--
  }
  return edad
}


export default function SplashScreen({ onDone }: Props) {
  const [leaving, setLeaving] = useState(false)

  const handleEnter = () => {
    setLeaving(true)
    setTimeout(onDone, 900)
  }

  return (
    <div className={`splash${leaving ? ' splash--leaving' : ''}`}>

      {/* Stars */}
      {STARS.map(s => (
        <span
          key={s.id}
          className="splash-star"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            '--t': s.duration,
            '--d': s.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* Confetti */}
      {CONFETTI.map(c => (
        <span
          key={c.id}
          className="splash-confetti"
          style={{
            left: c.left,
            backgroundColor: c.color,
            width: c.size,
            height: c.size,
            borderRadius: c.isCircle ? '50%' : '2px',
            transform: `rotate(${c.rotation}deg)`,
            '--t': c.duration,
            '--d': c.delay,
          } as React.CSSProperties}
        />
      ))}

      {/* Title */}
      <h1 className="splash-title">¡Feliz Cumpleaños!</h1>

      {/* Cake */}
      <div className="cake-wrap">
        <div className="cake">

          {/* Candles row */}
          <div className="cake__candles">
            {CANDLES.map((bg, i) => (
              <div
                key={i}
                className="candle"
                style={{ '--ci': i, background: bg } as React.CSSProperties}
              >
                <div className="candle__wick" />
                <div className="candle__flame-wrap">
                  <div className="candle__glow" />
                  <div className="candle__flame" />
                </div>
              </div>
            ))}
          </div>

          {/* Top tier */}
          <div className="cake__tier cake__tier--top">
            <div className="cake__body">
              <svg
                className="cake__frosting"
                viewBox="0 0 160 28"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0,0 L160,0 L160,8 Q150,26 140,8 Q130,26 120,8 Q110,26 100,8 Q90,26 80,8 Q70,26 60,8 Q50,26 40,8 Q30,26 20,8 Q10,26 0,8 Z"
                  fill="white"
                />
              </svg>
              <span className="cake__dots" aria-hidden="true" />
            </div>
          </div>

          {/* Bottom tier */}
          <div className="cake__tier cake__tier--bottom">
            <div className="cake__body">
              <svg
                className="cake__frosting"
                viewBox="0 0 220 28"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M0,0 L220,0 L220,8 Q210,26 200,8 Q190,26 180,8 Q170,26 160,8 Q150,26 140,8 Q130,26 120,8 Q110,26 100,8 Q90,26 80,8 Q70,26 60,8 Q50,26 40,8 Q30,26 20,8 Q10,26 0,8 Z"
                  fill="white"
                />
              </svg>
              <span className="cake__dots" aria-hidden="true" />
            </div>
          </div>

          {/* Plate */}
          <div className="cake__plate" />

        </div>
      </div>

      {/* Name subtitle */}
      <p className="splash-subtitle">Emi {calcularEdad(BIRTHDAY_DATE)}✨</p>

      {/* CTA button */}
      <button className="splash-btn" onClick={handleEnter}>
        Abrir tu carta 🎁
      </button>

    </div>
  )
}
