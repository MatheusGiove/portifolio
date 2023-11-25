import React from "react";
import styles from "./Header.module.css";
import Home from "../../Assets/svg/navbar/Home";
import Profile from "../../Assets/svg/navbar/Profile";
import Graduate from "../../Assets/svg/navbar/Graduate";
import Skills from "../../Assets/svg/navbar/Skills";
import Projects from "../../Assets/svg/navbar/Projects";
import Contact from "../../Assets/svg/navbar/Contact";

const Header = () => {
  React.useEffect(() => {
    // Mudar o estilo do menu
    const link = document.querySelectorAll<HTMLLIElement>(`.${styles.link}`);
    const clickEvent = (e: MouseEvent) => {
      if (e && e.currentTarget instanceof HTMLLIElement) {
        link.forEach((item) => {
          item.classList.remove(styles.active);
        });
        e.currentTarget.classList.add(styles.active);
      }
    };
    link.forEach((item) => {
      item.addEventListener("click", clickEvent);
    });

    // Scroll suave
    const SmootScroll = () => {
      const link = document.querySelectorAll<HTMLAnchorElement>(`[data-link]`);
      link.forEach((item) => {
        item.addEventListener("click", (event) => {
          event.preventDefault();
          const href = item.getAttribute("href");
          if (href) {
            const section = document.querySelector(href);
            section?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });
    };
    SmootScroll();

    return () => {
      link.forEach((item) => {
        item.removeEventListener("click", clickEvent);
      });
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={`${styles.link} ${styles.active}`}>
            <b></b>
            <b></b>
            <a data-link href="#home">
              <span className={styles.icon}>
                <Home className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Home</span>
            </a>
          </li>
          <li className={styles.link}>
            <b></b>
            <b></b>
            <a data-link href="#profile">
              <span className={styles.icon}>
                <Profile className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Perfil</span>
            </a>
          </li>
          <li className={styles.link}>
            <b></b>
            <b></b>
            <a data-link href="#graduate">
              <span className={styles.icon}>
                <Graduate className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Graduação</span>
            </a>
          </li>
          <li className={styles.link}>
            <b></b>
            <b></b>
            <a data-link href="#skills">
              <span className={styles.icon}>
                <Skills className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Habilidades</span>
            </a>
          </li>
          <li className={styles.link}>
            <b></b>
            <b></b>
            <a data-link href="#projects">
              <span className={styles.icon}>
                <Projects className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Projetos</span>
            </a>
          </li>
          <li className={styles.link}>
            <b></b>
            <b></b>
            <a data-link href="#contact">
              <span className={styles.icon}>
                <Contact className={styles.svg} color="var(--w2)" />
              </span>
              <span className={styles.page}>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
