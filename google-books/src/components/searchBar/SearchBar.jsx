import { useState } from "react"
import style from "./SearchBar.module.scss"

const SearchBar = ({onSearch}) => {
    const [term, setTerm] = useState('');

    // When input is changed, update the term
    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    // When the seearch button is clicked, run the onSearch function and pass in the term 
    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(term);
    }

    return (
        <form className={style.SearchBar} onSubmit={onFormSubmit}>
            {/* Set the value of the input equal to the value 
                Whenever the input is changed, update the term
                When the Search is clicked or Enter key is pressed, pass the term to the onSearch function at App.jsx 
                Do this so the App.jsx can have the same state value as SearchBar.jsx*/}
            <input onChange={onInputChange} type="text" value={term} placeholder="What is your favourite book?"></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar