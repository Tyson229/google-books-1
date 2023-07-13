import style from './BookModal.module.scss'

const BookModal = ({book, closeModal}) => {
    
    const onClickCloseModal = () => {
        closeModal(false);
    }

    // Make sure result exists
    let image = '';
    if (book.volumeInfo.imageLinks)
        image = book.volumeInfo.imageLinks.thumbnail;

    let authors = [];
    if (book.volumeInfo.authors) {
        authors  = book.volumeInfo.authors;
    }

    let categories = [];
    if (book.volumeInfo.categories) {
        categories = book.volumeInfo.categories;
    }
    return (
        <div className={style.BookModal}>
            {/* Close Button */}
            <div className={style.BookModalNav}>
                <p className={style.BookModalNav_button} onClick={onClickCloseModal}>&times;</p>
            </div>

            {/** Books details */}
            <div className={style.BookModalContainer}>
                {/* Books thumbnail */}
                <div className={style.BookModalContainerImage}>
                    <img src={image}/>
                </div>
                {/* Books info */}
                <div className={style.BookModalContainerInfo}>
                    <p className={style.BookModalContainerInfo_title}>
                        {book.volumeInfo.title}
                    </p>
                    
                    <p className={style.BookModalContainerInfo_authors}>
                        {authors.join(', ')}
                    </p>
                    
                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Subtitle:</p> 
                        {book.volumeInfo.subtitle}
                    </div>

                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Description:</p> 
                        {book.volumeInfo.description}
                    </div>

                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Categories:</p> 
                        {categories.join(' - ')}
                    </div>

                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Language:</p> 
                        {book.volumeInfo.language}
                    </div>
                    
                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Page Count:</p> 
                        {book.volumeInfo.pageCount}
                    </div>

                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Published Date:</p> 
                        {book.volumeInfo.publishedDate}
                    </div>

                    <div className={style.BookModalContainerInfo_item}>
                        <p className={style.BookModalContainerInfo_item_title}>Publisher:</p> 
                        {book.volumeInfo.publisher}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookModal