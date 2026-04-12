import './Pa_Emi.css'

interface Props {
  onClose: () => void
}

export default function PaEmi({ onClose }: Props) {
  return (
    <div className="paemi-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="paemi-card" onClick={e => e.stopPropagation()}>

        <button className="paemi-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div className="paemi-photo-wrap">
          <img src={`${import.meta.env.BASE_URL}images/emi.png`} alt="Emi" className="paemi-photo" />
        </div>

        <div className="paemi-message">
          <p className="paemi-text">
            Haber si sigues diciendo que no te quiero hdtpm, te hice hasta una pagina para tu cumpleaños hdp, espero me invites a tu fiesta porque
            si no lo hiciste de regalo de cumpleaños te voy a dar 24 vergazos. <br/> Con Cariño, Mike.
          </p>
        </div>

      </div>
    </div>
  )
}
