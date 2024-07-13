import styles from './Cadastro.module.css';

export default function Cadastro() {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <label for="title">Criar nova conta</label>
                </div>
                <input type="text" name="nome" id="nome" placeholder="Nome" />
                <input type="text" name="email" id="email" placeholder="Email" />
                <input type="text" name="senha" id="senha" placeholder="Senha" />

                <div className={styles.datanascimento}>

                    <select name="dia">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                    </select>
                    <select name="mes">
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                    <select name="ano">
                        <option value={2024}>2024</option>
                        <option value={2023}>2023</option>
                    </select>
                </div>

                <button>Cadastrar</button>
                <a href="login">Já tem uma conta?</a>
                <div className={styles.line}></div>
                <a href="/" className={styles.return}>Voltar</a>
            </div>
        </body>
    )
}