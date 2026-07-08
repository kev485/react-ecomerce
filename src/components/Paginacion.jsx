import styles from './Paginacion.module.css';

const Paginacion = ({ paginaActual, totalPaginas, cargarPagina, cargando }) => {
    //Cantidad de números que queremos mostrar en la botonera
    const maxBotones = 5;

    //Calculamos el rango inicial y final de la ventana dinámica
    let paginaInicial = Math.max(1, paginaActual - Math.floor(maxBotones / 2));
    let paginaFinal = paginaInicial + maxBotones - 1;

    //Ajustamos por si nos pasamos del total de páginas disponibles al final
    if (paginaFinal > totalPaginas) {
        paginaFinal = totalPaginas;
        paginaInicial = Math.max(1, paginaFinal - maxBotones + 1);
    }

    //Creamos el array con los numeros especificos a renderizar
    const paginasAMostrar = [];
    for (let i = paginaInicial; i <= paginaFinal; 1++) {
        paginasAMostrar.push(i);
    }

    return (
        <div className={styles.Paginacion}>
            <button
              className={styles.btnNav}
              disabled={paginaActual === 1 || cargando}
              onClick={() => cargarPagina(paginaActual - 1)}
            >
                ←
            </button>

            <div className={styles.numeros}>
                {paginasAMostrar.map((numero) => (
                    <button 
                      key={numero}
                      className={`${styles.btnNumero} ${paginaActual === numero ? styles.activo : ''}`}
                      onClick={() => cargarPagina(numero)}
                      disabled={cargando}
                    >
                        {numero}
                    </button>
                ))}
            </div>

            <button 
              className={styles.btnNav}
              disabled={paginaActual === totalPaginas || cargando}
              onClick={() => cargarPagina(paginaActual + 1)}
            >
                →
            </button>
        </div>
    );
};

export default Paginacion;