import style from "./BookCard.module.scss"
import BookModal from "../bookModal/BookModal";
const BookCard = ({result, handle, setOpenModal}) => {
    const onClickBookCard = () => {
        handle(result);
        setOpenModal(true);
    }

    return (
        <div onClick={onClickBookCard} className={style.BookCard}>
            <div className={style.BookCardImage}>
                <img  src={result.volumeInfo.imageLinks.thumbnail}/>
            </div>
            
            <div className={style.BookCardDetails}>
                <p className={style.BookCardDetails_title}>{result.volumeInfo.title}</p>

                <p className={style.BookCardDetails_authors}>
                    {() => {return result.volumeInfo.authors && result.volumeInfo.authors.join(", ")}}
                </p>
                
                <p className={style.BookCardDetails_description}>{result.volumeInfo.description}</p>
            </div>
            
        </div>
    )    
};
    

export default BookCard