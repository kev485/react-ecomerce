import ItemList from './ItemList';
import estilos from './ItemListContainer.module.css';
import { useProductos } from '../context/ProductosContext';

const ItemListContainer = () => {
    const { productos, cargando, paginaActual, totalPaginas, cargandoPagina } = useProductos();

    if (cargando && productos.length === 0) {
        return (
            <div className={estilos.estaWrapper}>
                <div className={estilos.spinner} aria-label="Cargando" />
                <p className={estilos.estadoTexto}>Cargando productos...</p>
            </div>
        );
    }

    return (
        <main className={estilos.contenerdor}>
            <header className={estilos.encabezado}>
                <h1 className={estilos.titulo}>Nuestros Productos</h1>
            </header>

            <ItemList productos={productos} />

            {/* Paginacion */}
            <div className={estilos.paginacion}>
                <button className={estilos.btnNav} disabled={paginaActual === 1 || cargando} onClick={() => cargarPagina(paginaActual - 1)}> ← </button>

                <div className={estilos.numeros}>
                    {[...Array(totalPaginas)].map((_, index) => (
                        <button 
                          key={index + 1}
                          className={`${estilos.btnNumero} ${paginasActual === index + 1 ? estilos.activo : ''}`}
                          onClick={() => cargandoPagina(index + 1)}
                          disabled={cargando}>
                            {index + 1} 
                          </button>
                         
                    ))}
                </div>

                <button
                  className={estilos.btnNav}
                  disabled={paginaActual === totalPaginas || cargando}
                  onClick={() => cargarPagina(paginaActual + 1)}>
                    →
                  </button>
            </div>
        </main>
    );
};

export default ItemListContainer