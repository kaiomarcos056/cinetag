import styles from "./NaoEncontrada.module.css";
import naoencontrada from "./nao-encontrada.png";

function NaoEncontrada(){
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
            <img src={naoencontrada} />
        </section>
    )
}

export default NaoEncontrada;