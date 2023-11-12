import { useParams, useNavigate } from "react-router-dom";
import { findOneFilmInfo } from "../../API/findFilmQuery";
import {useState, useEffect} from "react"
import { OneFilm } from "../../types";
import styles from "./OneFilmInfo.module.css";

function OneFilmInfo () {

    const navigate = useNavigate();

    function goBack () {
        navigate(-1)
    }

    const {chosenFilm} = useParams ();

    const [filmInfo, setFilmInfo] = useState<OneFilm | null>(null)

    function getInfo () {
        findOneFilmInfo (chosenFilm as string).then((res) => setFilmInfo(res.data))
    }

    useEffect(() => {
        getInfo()
    }, [])
    if(filmInfo == null) {
        return null
    }

    
    return (
        <div className={styles.oneFilm}>
            <button onClick={goBack} className={styles.button}>Назад</button>
            <div className={styles.container}>
                <img className={styles.img} alt="film" src={filmInfo.posterUrl}/> 
                <div className={styles.info}>
                    <div className={styles.name}>{filmInfo.nameRu}</div>
                    <div>Год: {filmInfo.year}</div> 
                    <div>Длительность: {filmInfo.filmLength}</div>
                    <div>Слоган: {filmInfo.slogan}</div> 
                    <div>Тип: {filmInfo.type}</div>  
                    <div>Страна: {filmInfo.countries.map((el)=> el.country).join(", ")}</div>
                    <div>Возрастное ограничение: {filmInfo.ratingAgeLimits}+ </div>
                    <div>Описание: {filmInfo.description}</div>
                    {/* <div>{filmInfo.facts}</div>  */}
                </div>
            </div>
        </div>
    )
}

export default OneFilmInfo;