import { findFilmGenre } from "../../API/findFilmQuery"
import { useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import OneFilm from "../OneFilm/OneFilm";
import { Film } from "../../types";
import styles from "./FilmsByGenre.module.css";

function FilmsByGenre () {

    const {chosenGenre} = useParams(); 

    const [films, setFilms] = useState<Film[]>([]);

    useEffect (() => {
        if (chosenGenre !== undefined) {
            findFilmGenre(chosenGenre).then((res)=> setFilms(res.items))
        } 
    }, [] )

    return (
        <div className={styles.main}>
            <div className={styles.movies}>{films.map((el) => <OneFilm key={el.filmId} filmInfo={el}/>)}</div>
        </div>
    )
}

export default FilmsByGenre