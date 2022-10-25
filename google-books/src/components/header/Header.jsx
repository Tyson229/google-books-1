import style from "./Header.module.scss"
const Header = () => {
    return (
        <div className={style.Header}>
            <img src="https://cdn-icons-png.flaticon.com/512/166/166088.png"/>
            <h1>Google Books</h1>
        </div>
    )
}

export default Header