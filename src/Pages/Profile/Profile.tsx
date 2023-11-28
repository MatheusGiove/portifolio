import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <section id="profile" className={styles.profile}>
      <h1>Sobre</h1>
      <p>
        Atualmente, estou cursando
        <strong> Bacharelado em Ciência e Tecnologia</strong>
        <strong> Universidade Federal do ABC</strong> e complementando minha
        formação com cursos online de desenvolvimento web. Meus principais
        conhecimentos são em <strong>React, JavaScript, HTML, CSS</strong> e
        Também possuo conhecimento em <strong>UI Design.</strong>
      </p>
      <h2>Desenvolvedor Front-End</h2>
      <p>Estou sempre buscando maneiras de aprimorar minhas habilidades, e atualmente tenho me dedicado a criar projetos interessantes nessa área, podendo assim expandir meus conhecimentos.</p>
      <ul>
        <li className={styles.info}><span>Profissão:</span>Estudante</li>
        <li className={styles.info}><span>Idade:</span>20</li>
        <li className={styles.info}><span>Cidade:</span>São Paulo, SP</li>
        <li className={styles.info}><span>Contato:</span><a href="">Contato</a></li>
      </ul>
      <h3>Um pouco mais:</h3>
      <p>Comecei a jogar <strong>xadrez</strong> aos 7 anos e tive a oportunidade de participar do início de um projeto de xadrez no <strong>Colégio Augusto Laranja</strong> com bolsa integral, desde o Ensino Fundamental até o Ensino Médio, o que me permitiu viajar para diversos campeonatos, auxiliando o colégio a conquistar diversos títulos. Além disso, toco <strong>violino</strong> desde de os 10 anos e a combinação dessas duas atividades contribuiu significativamente para o meu <strong>desenvolvimento intelectual</strong>, e <strong>aprimoramento do raciocínio lógico</strong></p>
    </section>
  );
};

export default Profile;
