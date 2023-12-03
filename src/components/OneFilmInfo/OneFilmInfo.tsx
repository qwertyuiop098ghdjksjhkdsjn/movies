import { useParams, useNavigate } from "react-router-dom";
import { findOneFilmInfo } from "../../API/findFilmQuery";
import {useState, useEffect} from "react"
import { OneFilm } from "../../types";
import styles from "./OneFilmInfo.module.css";
import { getPictures } from "../../API/findFilmQuery";
import { Image } from "../../types";
import ImagePopUp from "../ImagePopUp/ImagePopUp";

function OneFilmInfo () {

    const navigate = useNavigate();

    function goBack () {
        navigate(-1)
    }

    const {chosenFilm} = useParams (); // film id

    const [filmInfo, setFilmInfo] = useState<OneFilm | null>(null)

    function getInfo () {
        findOneFilmInfo (chosenFilm as string).then((res) => setFilmInfo(res.data))
    }

    //state for pictures

    const [image, setImage] = useState<Image []> ([]);

   
    // state for popUp 

    const [popUpImg, setPopUpImg] = useState("");


    function popUp (url: string) {
        setPopUpImg(url)
        console.log(url)
    }


    useEffect(() => {
        getInfo()
        getPictures(chosenFilm as string).then((res) => setImage(res.items))
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
                </div>
            </div>
            <div className={styles.pictures}>{image.slice(0, 8).map((el) => <img alt="film" src={el.previewUrl} onClick={() => popUp(el.imageUrl)}/>)}</div>
          {popUpImg !== "" && <ImagePopUp onClosePopUp={popUp} image={popUpImg}/>}
        </div>
    )
}

export default OneFilmInfo;