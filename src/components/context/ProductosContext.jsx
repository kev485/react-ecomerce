import { createContext, useState, useEffect, useContext, Children } from "react";
import { collection, onSnapshot, query, doc, deleteDoc, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ProductosContext = createContext();

export const ProductosProvider = ({ Children}) => {
    const [productos, setProductos] = useState([]);

    //Leemos en tiempo real (onSnapshot)
    useEffect(() => {
        const consulta = query(collection(db, "productos-nacionales"));
        const unsub = onSnapshot(consulta, snapshot => {
            setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data( ) })));
        });
        return () => unsub();
    }, []);

    const eliminarProducto = async (id) => {
        await deleteDoc(doc(db, "productos-nacionales", id));
        // No hace falta setProductos porque onSnapshot lo hace solo al detectar el cambio
    };

    const agregarProducto = async (nuevoProd) => {
        await addDoc(collection(db, "producto-nacionales"), nuevoProd);
    };

    return (
        <ProductosContext.Provider value={{ productos, eliminarProducto, agregarProducto }}>
            {Children}
        </ProductosContext.Provider>
    );
};

// Custom Hook de producto
export const useProductos = () => {
    return useContext(ProductosContext);
};