import { Film } from "../../types"
import styles from "./OneFilm.module.css";
import { useNavigate } from "react-router-dom";

interface OneFilmProps {
    filmInfo: Film
}

function OneFilm ({filmInfo}: OneFilmProps) {

    const navigate = useNavigate ()

    function navigation () {
        navigate("/oneFilmInfo/" + filmInfo.filmId)
    }

    return (
        <div className={styles.film}>
            <img className={styles.picture} src={filmInfo.posterUrlPreview} alt="oneFilm"/>
             <div>{filmInfo.nameRu}</div>
             <div>Год: {filmInfo.year}</div>
             <div>Длительность: {filmInfo.filmLength}</div>
             <div>Рейтинг: {filmInfo.rating}</div>
             <button onClick={navigation}>Подробнее</button>
        </div>
    )
}

export default OneFilm;