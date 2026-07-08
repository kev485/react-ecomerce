import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Header = () => {
    const { obtenerCantidadTotal } = useCart();
    const totalItems = obtenerCantidadTotal();

    return(
        <Header>
            <Nav />
            <link to="/carrito">
              Carrito 🛒 { totalItems > 0 && <span>{totalItems}</span>}
            </link>
        </Header>
    );
};

export default Header;