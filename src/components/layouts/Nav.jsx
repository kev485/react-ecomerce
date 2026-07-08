import { Link } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
    return(
        <nav className={Styles.navContainer}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={style.navLink}>Inicio</Link>
                </li>
                <li>
                    <Link to="/productos" className={style.navLink}>Productos</Link>

                </li>
                <li>
                    <Link to="/contacto" className={style.navLink}>Contacto</Link>

                </li>

                <li>
                    <Link to="/dashboard" className={style.navLink}>Dashboard</Link>

                </li>

            </ul>
        </nav>
    )
}

export default Nav