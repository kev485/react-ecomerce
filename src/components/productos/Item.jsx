import { useState } from "react";



export default function Item({ nombre, stock, precio, imagen}) {
    //1. Damos "memoria" al componente
    const [cantidad, setCantidad] = useState(0);
    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = () => {
        setFavorito(!favorito);
    };

    //2. Creamos la lógica de la acción
    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementar = () => {
        if(cantidad > 0) {
           setCantidad(cantidad - 1);
        }
          
    };

    const styles = {
        estrella: {
            cursor: 'pointer',
            fontSize: '24px',
            userSelect: 'none'
        }
    };
    return (
        <div>
            
            <h1>{nombre}</h1>
            <h2>{precio}ARS</h2>
            <span onClick={toggleFavorito} style={{... styles.estrella, color: favorito ? '#FFD700' : '#ccc' }}> 
                {favorito ? '★' : '☆'}
            </span>
            <img src={imagen}/>
            {/* 3. Conectamos la acción (onClick) a la lógica */}
            <button onClick={decrementar}>-</button>
            <p>{cantidad}</p>
            <button onClick={incrementar}>+</button>
        </div>
    )
}


