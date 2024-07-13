import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.navbar}>
        <h1>Bem-Vindo ao site para controle do Cliente</h1>
        <div className={styles.hr}>
          <hr />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.cadastro}>
            <a href="cadastro">Cadastro</a>
          </div>
          <div className={styles.login}>
            <a href="login">Login</a>
          </div>
          <div className={styles.tabela}>
            <a href="tabela">Tabela</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;