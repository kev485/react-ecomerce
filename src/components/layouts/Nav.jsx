import { Link } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
    return(
        <nav className={Styles.navContainer}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/tecnologia" className={style.navLink}>Inicio</Link>
                </li>
                <li>
                    <Link to="/mensajito" className={style.navLink}>Mensajito</Link>

                </li>
                <li>
                    <Link to="/moda" className={style.navLink}>Xbox</Link>

                </li>

            </ul>
        </nav>
    )
}

export default Nav