import style from "./BookCard.module.scss"
import BookModal from "../bookModal/BookModal";
const BookCard = ({result}) => {
    const onClickBookCard = () => {
        BookModal(result)
    }
    try{
        return (
            <div onClick={onClickBookCard} className={style.BookCard}>
                <div className={style.BookCardImage}>
                    <img  src={result.volumeInfo.imageLinks.smallThumbnail}/>
                </div>
                
                <div className={style.BookCardDetails}>
                    <p className={style.BookCardDetails_title}>{result.volumeInfo.title}</p>
                    <p className={style.BookCardDetails_authors}>{result.volumeInfo.authors.join(", ")}</p>
                    <p className={style.BookCardDetails_description}>{result.volumeInfo.description}</p>
                </div>
                
            </div>
        )

            //This is used to catch the error from API
            // Some book doesn't have image
    }catch(err) {
        <div
        onClick={onClickBookCard} className={style.BookCard}>
                <img src=''/>
                <div>
                <p>{result.volumeInfo.title}</p>
                <p>{result.volumeInfo.authors}</p>
                <p>{result.volumeInfo.description}</p>
                </div>
                
            </div>
    }

    
};
    

export default BookCard