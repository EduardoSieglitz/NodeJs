import styles from './Login.module.css';

function login() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <label for="title">Entrar na conta</label>
                </div>
                <form action="loginCliente">
                    <input type="text" name="nomeEmail" id="nomeEmail" placeholder="Nome ou Email" />
                    <input type="text" name="senha" id="senha" placeholder="Senha" />

                    <button>Entrar</button>
                    <a href="#">Esqueceu a senha?</a>
                </form>
                <div className={styles.line}></div>
                <div className={styles.cad}>
                    <a href="cadastro"><button>Criar nova conta</button></a>
                </div>
                <a href="/">Voltar</a>
            </div>
        </>
    );
}
export default login;