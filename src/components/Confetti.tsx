const CONFETTI_COLORS = ['#ff6b9d', '#ffd93d', '#6bceff', '#a8ff78', '#ffb347', '#c3a1ff', '#ff9a9e']

export const CONFETTI = Array.from({ length: 52 }, (_, i) => ({
  id: i,
  left: `${(i * 31.7 + 5) % 100}%`,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  delay: `${((i * 0.23) % 5).toFixed(2)}s`,
  duration: `${(3.5 + (i * 0.31) % 4).toFixed(2)}s`,
  size: `${5 + (i % 7)}px`,
  isCircle: i % 3 !== 0,
  rotation: (i * 47) % 360,
}))

interface Props {
  fixed?: boolean
}

export default function Confetti({ fixed = true }: Props) {
  return (
    <>
      {CONFETTI.map(c => (
        <span
          key={c.id}
          className={`confetti-piece${fixed ? ' confetti-piece--fixed' : ''}`}
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
    </>
  )
}
