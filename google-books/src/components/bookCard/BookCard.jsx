import style from "./BookCard.module.scss"
const BookCard = ({result}) => {

    try{
        return (
            <div className={style.BookCard}>
                <img src={result.volumeInfo.imageLinks.smallThumbnail}/>
                <p className={style.title}>{result.volumeInfo.title}</p>
                <p className={style.author}>{result.volumeInfo.authors.join(", ")}</p>
                <p className={style.description}>{result.volumeInfo.description}</p>
            </div>
        )

            //This is used to catch the error from API
            // Some book doesn't have image
    }catch(err) {
        <div className={style.BookCard}>
                <img src=''/>
                <p>{result.volumeInfo.title}</p>
                <p>{result.volumeInfo.authors}</p>
                <p>{result.volumeInfo.description}</p>
            </div>
    }

    
};
    

export default BookCard