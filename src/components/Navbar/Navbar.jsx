import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt="Logo RYKO" className="navbar-logo-img" />
      </div>

      <button
        className='navbar-hamburguer'
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-menu ${menuAberto ? 'aberto' : ''}`}>
        <li><a href="#home" onClick={() => setMenuAberto(false)}>Home</a></li>
        <li><a href="#produtos" onClick={() => setMenuAberto(false)}>Produtos</a></li>
        <li><a href="#promocoes" onClick={() => setMenuAberto(false)}>Promoções</a></li>
        <li><a href="#contato" onClick={() => setMenuAberto(false)}>Contato</a></li>
         <li><a href="#sobre" onClick={() => setMenuAberto(false)}>Sobre</a></li>
      </ul>
    </nav>
  )
}

export default Navbar