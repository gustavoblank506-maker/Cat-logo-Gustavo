import { useState, useEffect } from "react"
import './Slideshow.css'
import samurai from '../../assets/Samurai.png'

const slides = [
    {
    id: 1,
    titulo: "PlayStation 1 Original",
    subtitulo: "O clássico que definiu uma geração",
    preco: "R$ 500,00",
    imagem: "https://comparegames.com.br/_next/image?url=https%3A%2F%2Fus-east-1-shared-usea1-02.graphassets.com%2FAezywmWICRKCPWoFJCljEz%2Fresize%3Dwidth%3A1920%2Cheight%3A1080%2FkTFkK7MESBSkEuc3QFbn&w=3840&q=85"
  },
  {
    id: 2,
    titulo: "Super Nintendo",
    subtitulo: "Retrô, raro e colecionável",
    preco: "R$ 450,00",
    imagem: "https://s2-techtudo.glbimg.com/otVVeuAwFYZWJ23gL3R-3x7hqY0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/V/mmDQgKQiC7sdFK74pqjQ/supernintendo.jpg"
  },
  {
    id: 3,
    titulo: "Mega Drive 16-bit",
    subtitulo: "Sega nunca morre",
    preco: "R$ 400,00",
    imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2025/10/02/mega-drive-tectoy-1-vb6csxqwg7du.jpg"
  }
]

function Slideshow() {
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setAtual(prev => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])


    return (
    <div className="slideshow" id="inicio">
        <img src={slides[atual].imagem} alt={slides[atual].titulo} className="slideshow-imagem" />
        <img src={samurai} alt="Samurai Ryko" className="slideshow-samurai" />
        <div className="slideshow-info">
            <h1>{slides[atual].titulo}</h1>
            <p>{slides[atual].subtitulo}</p>
            <span className="slideshow-preco">{slides[atual].preco}</span>
            <button className="slideshow-btn">Ver oferta</button>
        </div>
        <div className="slideshow-dots">
            {slides.map((_, i) => (
                <span
                    key={i}
                    className={`slideshow-dot ${i === atual ? "active" : ""}`}
                    onClick={() => setAtual(i)}
                />
            ))}
        </div>
    </div>
)
}

export default Slideshow;