import './Footer.css'
import Samurai from '../../assets/Samurai.png'

function Footer() {
  return (
    <footer className="footer" id="contato">
      <img src={Samurai} alt="Samurai Ryko" className="footer-samurai" />
      <div className="footer-top">

        <div className="footer-marca">
          <h2 className="footer-logo">RYKO</h2>
          <p className="footer-slogan">ゲームの魂 — A alma dos games</p>
        </div>

        <div className="footer-links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#inicio">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#promocoes">Promoções</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </div>

        <div className="footer-contato">
          <h4>Contato</h4>
          <p>📍 Cativis, Bahia</p>
          <p>📱 (71) 99999-9999</p>
          <p>✉️ contato@ryko.com.br</p>
        </div>

        <div className="footer-redes">
          <h4>Redes Sociais</h4>
          <div className="footer-icons">
            <a href="#" className="footer-icon">IG</a>
            <a href="#" className="footer-icon">WA</a>
            <a href="#" className="footer-icon">FB</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RYKO. Todos os direitos reservados.</p>
        <p>Feito por Gustavo Rocha de Jesus </p>
        <p className="footer-kanji">力 · 魂 · 伝</p>
      </div>

    </footer>
  )
}

export default Footer