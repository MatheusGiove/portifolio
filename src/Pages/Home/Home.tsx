import React from "react";
import styles from "./Home.module.css";
import Typed from "react-typed";
import Logo from "../../Assets/svg/Logo";
import LinkedinIcon from "../../Assets/svg/contact/LinkedinIcon";
import GithubIcon from "../../Assets/svg/contact/GithubIcon";
import InstagramIcon from "../../Assets/svg/contact/InstagramIcon";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <span className={styles.logo}>
        <Logo />
      </span>
      <h1 className={styles.name}>Matheus Faria Giove</h1>
      <h2 className={styles.title}>
        Sou{" "}
        <Typed
          typeSpeed={50}
          loop
          backSpeed={30}
          strings={["Desenvolvedor Front-End", "Web Designer", "Freelancer"]}
          backDelay={1000}
          cursorChar="|"
        />
      </h2>
      <ul className={styles.list}>
        <li className={styles.contact}>
          <a target="_blank" href="https://www.linkedin.com/in/matheus-faria-giove-3a6159259/">
            <LinkedinIcon />
          </a>
        </li>
        <li className={styles.contact}>
          <a target="_blank" href="https://github.com/MatheusGiove">
            <GithubIcon />
          </a>
        </li>
        <li className={styles.contact}>
          <a target="_blank" href="https://www.instagram.com/matheusgiove/">
            <InstagramIcon />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
