const STARS = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: `${(i * 37.3 + 11) % 100}%`,
  top: `${(i * 53.1 + 7) % 100}%`,
  delay: `${((i * 0.19) % 3).toFixed(2)}s`,
  duration: `${(1.5 + (i * 0.23) % 2).toFixed(2)}s`,
  size: `${2 + (i % 3)}px`,
}))

interface Props {
  fixed?: boolean
}

export default function Stars({ fixed = true }: Props) {
  return (
    <>
      {STARS.map(s => (
        <span
          key={s.id}
          className={`star-piece${fixed ? ' star-piece--fixed' : ''}`}
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
    </>
  )
}
