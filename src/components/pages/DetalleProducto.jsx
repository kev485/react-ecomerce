import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useProductos } from "../context/ProductosContext";
import styles from './DetalleProducto.module.css'

const ProductoDetalle = () => {

    const {id} = useParams();
    //const [producto, setProducto] = useState(null);
    const { productos } = useProductos();
    const [listaOpiniones, setListaOpiniones] = useState([]);
    const [cargando, setCargando] = useState(true);

    //Buscamos directamente el producto en el context
    const datosProductos = productos.find(p => p.id === id);

    const agregarAlCarrito = () => {
        alert(`¡${producto.nombre} agregado al carrito`);
    }
    
    useEffect(() => {
        const consultaOpiniones = query(
            collection(db, "opiniones"),
            where("productoId", "==", id)
        );

        const desvincular = onSnapshot(consultaOpiniones, captura => {
            const opinionesFirebase = captura.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setListaOpiniones(opinionesFirebase);
            setCargando(false);
        });

        //obtenerProducto();
        return () => desvincular();
    }, [id]);

    if (cargando) return <div className={styles.container}><h2>Cargando Opiniones...</h2></div>;
    if (!datosProductos) return <div className={styles.container}><h2>Producto no encontrado</h2></div>;

    return (
        <div className={styles.container}>
            <main className={styles.mainContent}>
                <div className={styles.imageWrapper}>
                    {datosProductos.imagen && (
                        <img src={datosProducto.imagen} alt={datosProducto.nombre} className={styles.imagen}/>
                    )}
                </div>

                <div className={styles.infoBox}>
                    <h1 className={styles.nombre}>{datosProducto.nombre}</h1>
                    <p className={styles.descripcion}>{datosProducto.descripcion}</p>


                    <div className={styles.precio}>
                        <span className={styles.moneda}>ARS</span>
                        ${datosProducto}
                    </div>

                    <button onClick={agregarAlCarrito} className={styles.btnCarrito}>Añadir al Carrito</button>
                </div>
            </main>

            <section className={styles.opinionesSection}>
                <h2 className={styles.opinionesTitle}>Opiniones de la comunidad</h2>
                {listaOpiniones.length === 0 ? (
                    <p className={{color: '#808090'}}>Aún no hay reseñas para este artículo</p>
                ) : (
                    listaOpiniones.map(op => (
                        <div key={op.id} className={styles.opinionCard}>
                            <strong className={styles.clienteNombre}>{op.clienteNombre}</strong>
                            <p>{op.comentario}</p>
                            <span className={styles.rating}>Calificación: {op.rating} ★</span>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default ProductoDetalle;