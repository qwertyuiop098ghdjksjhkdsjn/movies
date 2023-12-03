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

    const [page, setPage] = useState(1);  //state для текущей страницы
    const [pagesCount, setPagesCount] = useState (0); //state для количества всех страниц

    const [input, setInput] = useState<string>(filmName || "");

    useEffect(() => {
        if(filmName) {
            findFilm(filmName, page).then((res)=> {setFilms(res.films); setPagesCount(res.pagesCount); 
            if(res.films.length === 0) {
                alert("Ничего не найдено!")
            }
            window.scrollTo(0,0) })
        }}, [filmName, page])
            
        const navigate = useNavigate();

        function navigation () {
                navigate("/")
        }

        function onClick () {
            navigate("/search/" + input)
        }

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
            <div className={styles.block}>
                <header>
                    <button className={styles.back} onClick={navigation}>На главную</button>
                    <div className={styles.doSearch}>
                        <input className={styles.input} onChange={(e)=> setInput(e.target.value)} value={input}/>
                        <button onClick={onClick}>Найти</button>
                    </div>
                </header> 
                
                <div className={styles.movies}>{films.map((el)=> <OneFilm filmInfo={el} key={el.filmId}/>)}</div>
                <div className={styles.allPages}>{pagesToArray().map((el) => <button className={styles.onePageButton} onClick={() => setPage(el)}>{el}</button>)}
                </div>
            </div>
        </div>
    )
}

export default SearchList; 