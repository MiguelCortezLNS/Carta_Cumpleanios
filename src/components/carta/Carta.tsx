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

          <p className="carta__opener"> Bros</p>

          <div className="carta__body">
            <p className="carta__p">
              La neta we, eres un muy buen amigo, aunque ya no nos veamos tan seguido como antes, la neta eres
              mi mejor amigo, no espere conocerte en el momento tan surrealista en el que te conoci haha por como me
              obligaste a hablarle a ya tu sabes y desde ahi el que ya no se separo de mi lado fuiste tu.
              Y que bueno que fue asi bro uwu.
            </p>

            <p className="carta__p carta__p--accent">
              Ojala sigamos siendo amigos por muchos años más, y que sigamos compartiendo momentos más juntos.
            </p>

            <p className="carta__p">
              Hoy te deseo un muy buen cumpleaños tanto que te hice esta pagina we, si te voy a felicitar te voy a felicitar
              de una manera que entendemos tu y yo como programadores uwu.
            </p>

            <p className="carta__p">
              No soy muy bueno escribiendo cartas we, pero si soy mejor programandote una uwu, de verdad eres un muy buen amigo y mi mejor amigo
              espero pasar muchos más años siendo buenos amigos we.
            </p>

            <p className="carta__p">
              Que este año sea brutal en el buen sentido: que te traiga salud, que te
              acerque a tus sueños, que estés rodeado de personas que te quieren de
              verdad y que, sobre todo, estés feliz. Te lo mereces todo y más.
            </p>

            <p className="carta__p carta__p--accent">
              NO HOMO, tqm bro 💖
            </p>
          </div>

          <div className="carta__divider" />

          <div className="carta__signature">
            <span className="carta__sign-label">Con cariño de: </span>
            <span className="carta__sign-name">Tu bro El Mike 💪🏻</span>
          </div>

        </div>
      </div>
    </section>
  )
}

