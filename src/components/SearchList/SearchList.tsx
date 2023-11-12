import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findFilm} from "./../../API/findFilmQuery";
import styles from "./SearchList.module.css";
import { Film } from "../../types";
import OneFilm from "../OneFilm/OneFilm";
import { useNavigate } from "react-router-dom";

function SearchList () {

    const {filmName} = useParams ();

    const [films, setFilms] = useState<Film[]>([]); //в useState хранится информация о фильмах, когда выполняется запрос

    const [input, setInput] = useState<string>(filmName || "");

    useEffect(() => {
        if(filmName) {
            findFilm(filmName).then((res)=> setFilms(res.films))
        }}, [filmName])

        function onClick () {
            findFilm(input).then((res)=> setFilms(res.films))
        }

        const navigate = useNavigate();

        function navigation () {
            navigate("/")
        }


    return (
        <div className={styles.main}>
            <div className={styles.block}>
                <header>
                    <button className={styles.back} onClick={navigation}>На главную</button>
                    <div className={styles.doSearch}>
                        <input className={styles.input} onChange={(e)=> setInput(e.target.value)} value={input}/>
                        <button onClick={onClick}>Найти</button>
                    </div>
                </header> 
                
                <div className={styles.movies}>{films.map((el)=> <OneFilm filmInfo={el} key={el.filmId}/>)}</div>
            </div>
        </div>
    )
}

export default SearchList; 