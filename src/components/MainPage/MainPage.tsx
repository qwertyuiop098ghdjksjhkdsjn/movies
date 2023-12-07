import Search from "./../Search/Search";
import styles from "./MainPaige.module.css";
import { findGenre } from "../../API/findFilmQuery";
import {useState, useEffect} from "react";
import { oneGenre } from "../../types";
import { useNavigate } from "react-router-dom";
import { setGenresList } from "../../Store/Slices/MovieSlice";
import { useAppDispatch, useAppSelector } from "../../Store/Store";

function MainPage () {

    // const [genres, setGenres] = useState<oneGenre[]>([]);

    const genres = useAppSelector(state => state.movies.genresList)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        findGenre().then((res) => dispatch(setGenresList(res.genres)))
    }, [])

    const navigate = useNavigate();

    function navigation (id: number) {
        navigate("/genre/" + id)
    }


    console.log(genres)

    return (
        <div>
            <header>
            </header>
            
            <div className={styles.main}>
                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.block}></div>
                <ul
                className={styles.genres}>{genres.map((el) => <li className={styles.item}>
                   <span onClick={() => navigation(el.id)} >
                    {el.genre}
                    </span> 
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default MainPage