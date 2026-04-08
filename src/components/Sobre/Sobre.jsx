import './Sobre.css'
import lojaAtual from '../../assets/loja-atual.png'
import lojaAntiga from '../../assets/loja-antiga.png'

function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">

        <div className="sobre-texto">
          <p className="sobre-tag">我々について</p>
          <h2 className="sobre-titulo">A alma dos games</h2>

          <div className="sobre-historia">
            <p>Tinha uns dez anos quando meu pai trouxe um PlayStation para casa.</p>
            <p>Não era novo. Tinha um arranhão no canto e o segundo controle não funcionava direito. Mas naquela noite, sentado no chão da sala com a luz apagada, eu entendi que aquela caixinha cinza era uma porta.</p>
            <p>Anos depois, fui embalar aquele console para vender. Segurei ele por um tempo e pensei em quantas pessoas como eu existiam por aí — que também tinham crescido assim, que também tinham aquelas memórias guardadas em plástico e silício, e que um dia também iam precisar encontrar esse lugar.</p>
            <p>Porque esse lugar não existia.</p>
            <p>Não do jeito certo. Não com o cuidado que essas coisas merecem. Não com o respeito pelo que elas representam.</p>
            <p>Então decidi criar.</p>
            <h5 className="sobre-titulo">Mas porque a temática japonesa?</h5>
            <p>Simples, por que sempre tive uma conexão especial com a cultura japonesa. A estética, a filosofia e a atenção aos detalhes são algo que sempre me inspiraram.</p>
            <p>A Ryko existe porque o legado dos games retrô não pode simplesmente desaparecer em gavetas esquecidas e leilões de internet. Existe porque cada console, cada cartucho, cada card já foi o mundo inteiro de alguém. E esse alguém merece encontrar esse mundo de volta.</p>
            <p className="sobre-destaque">Você merece encontrar esse mundo de volta.</p>
            <p className="sobre-assinatura">Bem-vindo à Ryko.</p>
          </div>
        </div>

        <div className="sobre-fotos">
          <div className="sobre-foto-wrapper">
            <img src={lojaAtual} alt="Ryko hoje" className="sobre-foto sobre-foto-atual" />
            <span className="sobre-foto-legenda">Hoje</span>
          </div>
          <div className="sobre-foto-wrapper sobre-foto-antiga-wrapper">
            <img src={lojaAntiga} alt="Ryko no início" className="sobre-foto sobre-foto-antiga" />
            <span className="sobre-foto-legenda">Início</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Sobre