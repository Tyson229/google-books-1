import style from "./BookCard.module.scss"
const BookCard = () => {
    return (
        <div className={style.BookCard}>
            <img src="/"></img>
            <p>author</p>
            <p>title</p>
            <p>description</p>
        </div>
    )
}

export default BookCard