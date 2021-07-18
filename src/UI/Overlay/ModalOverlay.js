import styles from "./ModalOverlay.module.css";
import Card from "../Card"

const ModalOverlay = props => {
    return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
    </Card>
}

export default ModalOverlay;