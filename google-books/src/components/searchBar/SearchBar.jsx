import style from "./SearchBar.module.scss"
const SearchBar = ({HandleSearch}) => {
    return (
        <div className={style.SearchBar}>
            <input onChange={HandleSearch} type="search" placeholder="What is your favourite book?"></input>
            <button onClick={HandleSearch}>Search</button>
        </div>
    )
}

export default SearchBar