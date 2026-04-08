import './App.css';
import { useState } from 'react';
import produtos from './data/produto'
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import CategoryList from './components/CategoryList/CategoryList';
import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';
import PromoSection from './components/PromoSection/PromoSection';
import Sobre from './components/Sobre/Sobre';

function App(){
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

    const categorias = ['Todos', ...new Set(produtos.map(produto => produto.categoria))];

    const produtosFiltrados = categoriaSelecionada === 'Todos' ? produtos 
    : produtos.filter(produto => produto.categoria === categoriaSelecionada);

    return (
        <div className="App">
            <Navbar />
            <Slideshow />
            <CategoryList
                categorias={categorias}
                selecionada={categoriaSelecionada}
                onSelecionar={setCategoriaSelecionada}
            />
            <section className="grid-produtos secao-com-fundo">
                {produtosFiltrados.map(produto => (
                    <ProductCard key={produto.id} produto={produto} />
                ))}
            </section>
            <PromoSection produtos={produtos} />
            <Sobre />
            <Footer />
        </div>
    );
}

export default App;