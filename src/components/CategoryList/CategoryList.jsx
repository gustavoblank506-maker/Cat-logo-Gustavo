import './CategoryList.css'

function CategoryList({ categorias, selecionada, onSelecionar}) {
  return (
    <section className="category-list" id="produtos">
    {categorias.map(categoria => (
        <button
            key={categoria}
            className={'category-btn ' + (selecionada === categoria ? 'ativo' : '')}
            onClick={() => onSelecionar(categoria)}>
            {categoria}
        </button>
    ))}

    </section>
  )
}


export default CategoryList