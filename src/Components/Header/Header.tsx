import React from "react";
import styles from "./Header.module.css";
// import logo from "../../Assets/svg/logos/logo.svg";
import Home from "../../Assets/svg/navbar/Home";
import Profile from "../../Assets/svg/navbar/Profile";
import Graduate from "../../Assets/svg/navbar/Graduate";
import Skills from "../../Assets/svg/navbar/Skills";
import Projects from "../../Assets/svg/navbar/Projects";
import Contact from "../../Assets/svg/navbar/Contact";
import Menu from "../../Assets/svg/navbar/Menu";

const Header = () => {

  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    const links = document.querySelectorAll("li");

    function changeActive(this: HTMLElement) {
      links.forEach(link => {
        link.classList.remove(styles.active);
      })
      this.classList.add(styles.active);
    }

    links.forEach((link) => {
      link.addEventListener("click", changeActive);
    }, []);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", changeActive);
      });
    }
  }, []);

  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home">
        {toggle ? `True` : `False`}
      </a>
      <nav className={styles.nav}>
        <ul className={styles.linkList}>
          <li className={`${styles.link}`}>
            <a href="#home">
              <Home className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Home</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="#profile">
              <Profile className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Perfil</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="#graduate">
              <Graduate className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Graduação</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="#skills">
              <Skills className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Habilidades</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="#projects">
              <Projects className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Projetos</span>
            </a>
          </li>
          <li className={styles.link}>
            <a href="#contact">
              <Contact className={styles.icon} color="#fff" />
              <span style={{display: toggle ? 'block' : 'none'}} className={styles.text}>Contato</span>
            </a>
          </li>
        </ul>
      </nav>
      <button onClick={() => setToggle(!toggle)} className={styles.menuToggle}>
        <Menu className={styles.toggleMenu} />
      </button>
    </header>
  );
};

export default Header;
