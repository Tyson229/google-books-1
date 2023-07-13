import style from "./Header.module.scss"
const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.HeaderContent}>
                <a className={style.HeaderLogo} onClick={() => window.location.reload(false)}>
                    <img className={style.HeaderLogoImage} src="https://cdn-icons-png.flaticon.com/512/3389/3389081.png"/>
                    <p className={style.HeaderLogoTitle}>Google Books</p>
                </a>
                <div className={style.HeaderInfo}>
                    <a className={style.HeaderInfoItem} title='Google Books source code' href='https://github.com/Tyson229/google-books-1' target="_blank"><img className={style.HeaderInfoItemImage}src='https://cdn-icons-png.flaticon.com/512/1051/1051377.png'/></a>
                    
                    <a className={style.HeaderInfoItem} title='LinkedIn' href='https://au.linkedin.com/in/tien-khoa-nguyen-888463218?trk=people-guest_people_search-card' target="_blank"><img className={style.HeaderInfoItemImage}src='https://cdn-icons-png.flaticon.com/512/1384/1384088.png'/></a>
                </div>
            </div>
        </div>
    )
}

export default Header