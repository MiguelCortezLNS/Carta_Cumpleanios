import './Carta.css'

export default function Carta() {
  return (
    <section id="carta" className="carta">
      <div className="carta__inner">

        {/* ── Heading ── */}
        <div className="carta__heading">
          <h2 className="carta__title">La carta</h2>
        </div>

        {/* ── Letter card ── */}
        <div className="carta__paper">

          <p className="carta__opener">Querido Emi,</p>

          <div className="carta__body">
            <p className="carta__p">
              No todos los días te cruzas con alguien que, sin buscarlo, se vuelve parte
              de las mejores historias que tienes para contar. Tú eres exactamente eso:
              uno de esos amigos que aparecen en los momentos correctos y terminan
              quedándose en los más importantes.
            </p>

            <p className="carta__p carta__p--accent">
              Qué afortunado soy de tenerte en mi vida.
            </p>

            <p className="carta__p">
              Hoy que cumples un año más, quiero que sepas que cada momento compartido
              —las risas, las pendejadas, los planes que salieron mal y los que salieron
              mejor de lo esperado— los guardo con mucho cariño. Contigo todo es más
              chido, más auténtico y más divertido.
            </p>

            <p className="carta__p">
              Eres de las personas que dan sin esperar nada a cambio, que están ahí
              aunque sea inconveniente, y que hacen sentir a los demás que sí valen la
              pena. Eso no es poca cosa, bro: es de las cosas más valiosas que alguien
              puede ser.
            </p>

            <p className="carta__p">
              Que este año sea brutal en el buen sentido: que te traiga salud, que te
              acerque a tus sueños, que estés rodeado de personas que te quieren de
              verdad y que, sobre todo, estés feliz. Te lo mereces todo y más.
            </p>

            <p className="carta__p carta__p--accent">
              Que los próximos 365 días sean tan grandes como tú los imaginas. 🎉
            </p>
          </div>

          <div className="carta__divider" />

          <div className="carta__signature">
            <span className="carta__sign-label">Con cariño,</span>
            <span className="carta__sign-name">Tu bro El Mike 💪🏻</span>
          </div>

        </div>
      </div>
    </section>
  )
}

