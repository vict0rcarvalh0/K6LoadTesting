import styles from './styles.module.scss'

export default function SlimCard() {
    return(<div className={`${styles.slimcard}`}>
        <div className={`${styles.header} ${styles['c-blue']}`}>
            <h3>card</h3>
        </div>
        <div className={`${styles.cardcontent}`}>
            <ul>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
                <li>
                    <h4>ITEM</h4>
                </li>
            </ul>
        </div>
    </div>)
}