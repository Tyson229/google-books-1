import style from "./BookCard.module.scss"
//import BookModal from "../bookModal/BookModal";
const BookCard = ({result, handle, setOpenModal}) => {
    const onClickBookCard = () => {
        handle(result);
        setOpenModal(true);
    }

    let image = '';
    if (result.volumeInfo.imageLinks)
        image = result.volumeInfo.imageLinks.smallThumbnail;

    let authors = [];
    if (result.volumeInfo.authors) {
        authors  = result.volumeInfo.authors;
    }



    return (
        <div onClick={onClickBookCard} className={style.BookCard}>
            <div className={style.BookCardImage}>
                <img  src={image}/>
            </div>
            
            <div className={style.BookCardDetails}>
                <p className={style.BookCardDetails_title}>{result.volumeInfo.title}</p>

                <p className={style.BookCardDetails_authors}>
                    {authors.join(', ')}
                </p>
                
                <p className={style.BookCardDetails_description}>{result.volumeInfo.description}</p>
            </div>
            
        </div>
    )    
};
    

export default BookCard