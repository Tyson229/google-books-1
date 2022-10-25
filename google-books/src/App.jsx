import { useState } from 'react'
//import './App.css'
import style from "./App.module.scss"
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Container from './components/container/Container'

const App = () => {
  const [term, setTerm]= useState('')
  const [books, setBooks] = useState([])
  const HandleSearch = (event) => {
    setTerm(event.target.value);
    console.log(event.target.value);
    getBooks(term);
  }

  const getBooks = async (term) => {
    const api = 'https://www.googleapis.com/books/v1/volumes?q=' + term.split(' ').join('+'); 
    const response = await fetch (api);
    const json = await response.json()
    setBooks(json);
  }

  return (
    <div className={style.App}>
        <Header/>
      <SearchBar HandleSearch={HandleSearch}/>
      <Container DisplayBooks={books}/>
    </div>
  );
}

export default App
