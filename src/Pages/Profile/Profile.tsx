import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="profile" className={styles.profile}>
      <div className={styles.introduction}>
        <h1 className="title">Sobre</h1>
        <p className={styles.summary}>
          Atualmente, estou cursando
          <strong> Bacharelado em Ciência da Computação</strong> na
          <strong> Universidade Federal do ABC</strong> e complementando minha
          formação com cursos online de desenvolvimento web. Meus principais
          conhecimentos são em <strong>React, JavaScript, HTML, CSS</strong> e  <strong>UI/UX Design.</strong>
        </p>
      </div>
      <div className={styles.description}>
        <div>
          <h2 className={styles.subTitle}>Desenvolvedor Front-End</h2>
          <q>Não existem desafios impossíveis para mim, apenas habilidades que ainda não adquiri.</q>
          <ul className={styles.list}>
            <li className={styles.info}>
              <span>Profissão: </span>Estudante
            </li>
            <li className={styles.info}>
              <span>Idade: </span>20
            </li>
            <li className={styles.info}>
              <span>Cidade: </span>São Paulo, SP
            </li>
            <li className={styles.info}>
              <span>Contato: </span>
              <a href="">Contato</a>
            </li>
          </ul>
          <h3 className={styles.more}>Um pouco mais:</h3>
          <p>
            Comecei a jogar <strong>xadrez</strong> aos 7 anos e tive a
            oportunidade de participar do início de um projeto de xadrez no{" "}
            <strong>Colégio Augusto Laranja</strong> com bolsa integral, desde o
            Ensino Fundamental até o Ensino Médio, o que me permitiu viajar para
            diversos campeonatos, auxiliando o colégio a conquistar diversos
            títulos. Além disso, toco <strong>violino</strong> desde de os 10 anos
            e a combinação dessas duas atividades contribuiu significativamente
            para o meu <strong>desenvolvimento intelectual</strong>, e{" "}
            <strong>aprimoramento do raciocínio lógico</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
