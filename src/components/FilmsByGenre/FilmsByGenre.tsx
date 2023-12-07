import { findFilmGenre } from "../../API/findFilmQuery"
import { useParams, useNavigate } from "react-router-dom"
import {useEffect, useState} from "react";
import OneFilm from "../OneFilm/OneFilm";
import { filmByGenre } from "../../types";
import styles from "./FilmsByGenre.module.css";
import loading from "../../images/infinite-spinner (2).svg";
import { useAppDispatch, useAppSelector } from "../../Store/Store";
import { useDispatch } from "react-redux";
import { setFilmsByGenres } from "../../Store/Slices/MovieSlice";

function FilmsByGenre () {

    const {chosenGenre} = useParams(); 

    // const [films, setFilms] = useState<filmByGenre[]>([]);

    const films = useAppSelector(state => state.movies.filmsByGenres) //получение данных из store
    const dispatch = useAppDispatch() //получили функцию, которая нужна для отправки action

    const navigate = useNavigate ()

    function navigation (id: number) {
        navigate("/oneFilmInfo/" + id)
    }

    function navigateToMain () {
        navigate ("/")
    }

    const [page, setPage] = useState(1);  //state для текущей страницы
    const [pagesCount, setPagesCount] = useState (0); //state для количества всех страниц

    useEffect (() => {
        setLoad(true)
        if (chosenGenre !== undefined) {
            findFilmGenre(chosenGenre, page).then((res)=> {dispatch(setFilmsByGenres(res.items)); setPagesCount(res.totalPages); window.scrollTo(0,0)}
    ).finally(() => setLoad(false))} 
    }, [chosenGenre, page] )

    //state for loading
    const [load, setLoad] = useState(false);



    //функция, которая записывает число страниц в массив

    function pagesToArray () {
        let array = [];
        for (let i = 1; i <= pagesCount; i++) {
            array.push(i)
        } 
        return array
    }


    return (
        <div className={styles.main}>
            <header>
                <button className={styles.buttonMain} onClick={navigateToMain}>На главную</button>
            </header>
            {load && <div>
                 <img alt="loading" className={styles.logo} src={loading}/>
                </div>}
            <div className={styles.movies}>{films.map((filmInfo) => 

            <div className={styles.film}>
            <img className={styles.picture} src={filmInfo.posterUrlPreview} alt="oneFilm"/>
             <div className={styles.block}>
                <div>{filmInfo.nameRu}</div>
                <div>Год: {filmInfo.year}</div>
                <div>Рейтинг: {filmInfo.ratingKinopoisk}</div>
             </div>
             <button className={styles.button} onClick={() => navigation(filmInfo.kinopoiskId)}>Подробнее</button>
        </div>
        )}</div>
        <div className={styles.allPages}>{pagesToArray().map((el) => <button className={styles.onePageButton} onClick={() => setPage(el)}>{el}</button>)}</div>
        </div>
    )
}

export default FilmsByGenre