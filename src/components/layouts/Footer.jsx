import React from "react";
import styles from "./Footer.module.css";

const equipo = [
  {
    nombre: "Raul Marquez",
    cargo: "Full Stack Developer",
    descripcion:
      "Desarrollador encargado del frontend y la integración del sistema.",
    foto: "https://i.ibb.co/QjHx8V15/persona1.png",
    enlace: "https://github.com/",
  },
  {
    nombre: "Hernán Huerta",
    cargo: "Backend Developer",
    descripcion:
      "Responsable de la lógica del servidor y la base de datos.",
    foto: "https://i.ibb.co/v6YMF5wk/persona2.png",
    enlace: "https://github.com/",
  },
  {
    nombre: "Sergio Sanchez",
    cargo: "UI / UX Designer",
    descripcion:
      "Diseña la interfaz y mejora la experiencia del usuario.",
    foto: "https://i.ibb.co/HDhVhS7k/persona3.png",
    enlace: "https://github.com/",
  },
];

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      <section className={styles.teamSection}>
        <h2 className={styles.teamTitle}>Equipo de Desarrollo</h2>

        <div className={styles.teamContainer}>
          {equipo.map((persona) => (
            <a
              key={persona.nombre}
              href={persona.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img
                src={persona.foto}
                alt={persona.nombre}
                className={styles.avatar}
              />

              <h3>{persona.nombre}</h3>

              <span className={styles.cargo}>
                {persona.cargo}
              </span>

              <p>{persona.descripcion}</p>
            </a>
          ))}
        </div>
      </section>

      <nav>
        <ul className={styles.footerNav}>
          <li className={styles.footerItem}>
            <a href="#acerca" className={styles.footerLink}>
              Acerca de Nosotros
            </a>
          </li>

          <li className={styles.footerItem}>
            <a href="#privacidad" className={styles.footerLink}>
              Política de Privacidad
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>
          © {anioActual}{" "}
          <span className={styles.brand}>
            Tienda GAME
          </span>{" "}
          - Todos los derechos reservados
        </p>
      </div>

    </footer>
  );
};

export default Footer;