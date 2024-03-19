import SlimCard from "../SlimCard"
import styles from "./styles.module.scss"

export default function TableFeedback() {

    return(<div className={styles.card}>
        <h1>Importar clientes</h1>
        <hr />
        <p>
            Verifique se os nomes das colunas estão atribuídos corretamente. Os relatórios serão baseados e gerados com estas definições. Caso necessário, você pode editar a correspondência das colunas, atribuindo a uma coluna existente, criando um atributo ou ignorando.
        </p>
        <hr />
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.row}>
                    <div className={`${styles.circle} ${styles['c-blue']}`}></div>
                    <p>
                        Padrão | Cliente
                    </p>
                </div>
                <p>
                    0
                </p>
            </div>
        </div>

        <br /><br />

        <div>
            <div className={styles.cardrow}>
                <SlimCard/>
                <SlimCard/>
                <SlimCard/>
                <SlimCard/>
            </div>
        </div>
    </div>)
}