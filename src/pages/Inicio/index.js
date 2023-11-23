import styles from "./Inicio.module.css";
import Banner from "components/Banner";
import Cards from "components/Cards";
import Titulo from "components/Titulo";
import videos from "json/db.json";

function Inicio() {
    return (
        <>
            <Banner imagem="home"/>
            <Titulo> <h1> Um lugar para guardar seus videos e filmes! </h1> </Titulo>
            <section className={styles.container}>
            { videos.map( (video) => {
                return <Cards  key={video.id} {...video} />
            } )}
            </section>
        </>
    )
}

export default Inicio;