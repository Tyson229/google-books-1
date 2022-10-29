import { useState } from "react"
import style from "./SearchBar.module.scss"
import searchImage from './search.png';

const SearchBar = ({onSearch, startLoading}) => {
    const [term, setTerm] = useState('');
    const [previousTerm, setPreviousTerm] = useState('')
    // When input is changed, update the term
    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    // When the seearch button is clicked, run the onSearch function and pass in the term 
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
        setPreviousTerm(term)
        if(term && term != previousTerm)
        startLoading();
        
    }

    return (
        <div className={style.SearchBar}>
        <form className={style.SearchBarContent} onSubmit={onFormSubmit}>
            {/* Set the value of the input equal to the value 
                Whenever the input is changed, update the term
                When the Search is clicked or Enter key is pressed, pass the term to the onSearch function at App.jsx 
                Do this so the App.jsx can have the same state value as SearchBar.jsx*/}
            <input className={style.SearchBarContentInput} onChange={onInputChange} type="text" value={term} placeholder="What is your favourite book?"></input>
            <button className={style.SearchBarContentButton} type="submit"><img src={searchImage} alt="Search" /></button>
        </form>
        </div>
    )
}

export default SearchBar