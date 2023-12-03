import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";

function Search () {

    const [input, setInput] = useState("");

    const navigate = useNavigate();

    function doSearch () {
        navigate("/search/" + input)
    }

    return (
        <div className={styles.doSearch}>
            <input className={styles.input} onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="название фильма"></input>
            <button onClick={doSearch}>Найти</button>
        </div>
    )
}

export default Search