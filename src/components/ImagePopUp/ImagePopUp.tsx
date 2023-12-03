import styles from "./ImagePopUp.module.css";

interface Props {
    image: string
}


function ImagePopUp ({image}: Props) {

    return(
        <div className={styles.photo}>
            <img alt="filmPhoto" src={image}/>
        </div>
    )
}

export default ImagePopUp;