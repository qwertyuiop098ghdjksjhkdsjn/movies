import styles from "./ImagePopUp.module.css";

interface Props {
    image: string;
    onClosePopUp: (url: string) => void;
}


function ImagePopUp ({image, onClosePopUp}: Props) {

    return(
        <div onClick={()=>onClosePopUp("")} className={styles.photo}>
            <img onClick={(e)=> e.stopPropagation()} alt="filmPhoto" src={image}/>
        </div>
    )
}

export default ImagePopUp;