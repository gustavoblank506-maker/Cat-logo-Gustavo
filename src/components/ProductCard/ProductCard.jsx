import './ProductCard.css'

function ProductCard({ produto }) {
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={produto.imagem} alt={produto.nome} className="product-img" />
        {produto.desconto && (
          <span className="product-badge">-{produto.desconto}%</span>
        )}
      </div>
      <div className="product-info">
        <span className="product-categoria">{produto.categoria}</span>
        <h3 className="product-nome">{produto.nome}</h3>
        <p className="product-descricao">{produto.descricao}</p>
        <span className="product-conservacao">{produto.conservacao}</span>
        <div className="product-preco">
          {produto.desconto ? (
            <>
              <span className="preco-original">
                R$ {produto.preco.toFixed(2)}
              </span>
              <span className="preco-final">
                R$ {(produto.preco * (1 - produto.desconto / 100)).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="preco-final">
              R$ {produto.preco.toFixed(2)}
            </span>
          )}
        </div>
        <button className="product-btn">Ver detalhes</button>
      </div>
    </div>
  )
}

export default ProductCard