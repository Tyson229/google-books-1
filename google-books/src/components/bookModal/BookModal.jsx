import style from './BookModal.module.scss'

const BookModal = ({result}) => {
    return (
        <div className={style.BookModal}>
            <p>
                {result.id}
            </p>
        </div>
    )
}

export default BookModal