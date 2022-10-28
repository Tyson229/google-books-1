import { useState } from 'react'
import style from "./App.module.scss"
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Container from './components/container/Container'


const App = () => {
  const [term, setTerm]= useState('') //Search term

  // This is to handle the state of the App.js
  const onSearch = (input) => {
    setTerm(input)
  }


  return (
    <div className={style.App}>
      <Header className={style.Header}/>
      <SearchBar onSearch = {onSearch}/>
      <Container query={term}/>
    </div>
  );
}

export default App
