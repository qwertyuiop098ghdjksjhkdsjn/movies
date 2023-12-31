import { useParams, useNavigate } from "react-router-dom";
import { findOneFilmInfo } from "../../API/findFilmQuery";
import {useState, useEffect} from "react"
import { OneFilm } from "../../types";
import styles from "./OneFilmInfo.module.css";
import { getPictures } from "../../API/findFilmQuery";
import { Image } from "../../types";
import ImagePopUp from "../ImagePopUp/ImagePopUp";
import { getVideo } from "../../API/findFilmQuery";
import { useAppDispatch, useAppSelector } from "./../../Store/Store";
import { setOneFilmInfo } from "../../Store/Slices/MovieSlice";

function OneFilmInfo () {

    const navigate = useNavigate();

    function goBack () {
        navigate(-1)
    }

    const {chosenFilm} = useParams (); // film id

    // const [filmInfo, setFilmInfo] = useState<OneFilm | null>(null)

    const filmInfo = useAppSelector(state => state.movies.oneFilmInfo);
    const dispatch = useAppDispatch()



    function getInfo () {
        findOneFilmInfo (chosenFilm as string).then((res) => dispatch(setOneFilmInfo(res.data)))
    }

    //state for pictures

    const [image, setImage] = useState<Image []> ([]);

   
    // state for popUp 

    const [popUpImg, setPopUpImg] = useState("");


    //state for video

    // const [trailer, setTrailer] = useState("");


    function popUp (url: string) {
        setPopUpImg(url)
        console.log(url)
    }

    useEffect(() => {
        getInfo()
        getPictures(chosenFilm as string).then((res) => setImage(res.items))
        // video()
    }, [])
    if(filmInfo == null) {
        return null
    }
      

    // function video () {
    //     getVideo(chosenFilm as string).then((res) => res.items.filter((item) => item.site === "KINOPOISK_WIDGET")).then((res) => 
    //     {if (res.length !== 0) {
    //         setTrailer(res[0].url)
    //     }})
    // }

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
                    <div className={styles.description}>Описание: {filmInfo.description}</div>
                    {/* <div>{trailer}</div>
                    <div><iframe is="x-frame-bypass" src={trailer} width="500" height="500"></iframe></div> */}
                </div>
            </div>
            <div className={styles.pictures}>{image.slice(0, 8).map((el) => <img alt="film" src={el.previewUrl} onClick={() => popUp(el.imageUrl)}/>)}</div>
          {popUpImg !== "" && <ImagePopUp onClosePopUp={popUp} image={popUpImg}/>}
        </div>
    )
}

export default OneFilmInfo;