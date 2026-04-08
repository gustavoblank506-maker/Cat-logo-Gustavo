import './PromoSection.css';
import ProductCard from '../ProductCard/ProductCard';

function PromoSection({ produtos}) {
  const promocoes = produtos.filter(p => p.desconto !== null)

  return (
    <section className="promo-section secao-com-fundo" id="promocoes">
      <div className="promo-header">
        <h2 className="promo-titulo">プロモーション</h2>
        <p className="promo-subtitulo">PROMOÇÕES ESPECIAIS</p>
        </div> 
      <div className="promo-grid">
        {promocoes.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  )
}

export default PromoSection