import styles from './Tabela.module.css';

function Tabela() {
    return (
        <body className={styles.body}>
            <div className={styles.container}>
                <table border="1px">
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Data Nascimento</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>

                        <td></td>
                        <th><a className={styles.edita} href="/editar">Editar</a></th>
                        <th><button><a className={styles.deleta}>Deletar</a></button></th>
                        <input type="hidden" name="id" value="" />
                    </tr>
                </table>
            </div>
            <a href="/"><button>Voltar</button></a>
        </body>
    )
}

export default Tabela;