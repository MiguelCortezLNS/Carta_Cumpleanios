import { useState } from 'react'
import './header.css'

const NAV_LINKS = [
  { label: 'Brous',      href: '#brous'     },
  { label: 'Recuerdos',  href: '#recuerdos' },
  { label: 'Carta',      href: '#carta'     },
  { label: "Pa' Emi",    href: '#pa-emi'    },
  { label: 'Razones',    href: '#razones'    },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">

        <a href="#" className="site-header__logo" onClick={close}>
          🎂 Emi
        </a>

        <nav
          className={`site-header__nav${open ? ' site-header__nav--open' : ''}`}
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="site-header__link"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={`site-header__burger${open ? ' site-header__burger--open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  )
}
