import { useState } from 'react'
import style from "./App.module.scss"
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Container from './components/container/Container'
import BookModal from './components/bookModal/BookModal'



const App = () => {
  const [term, setTerm]= useState(''); //Search term
  const [book, setBook] = useState([]);

  const [openModal, setOpenModal] = useState(false)
  // This is to handle the state of the App.js
  const onSearch = (input) => {
    setTerm(input)
  }

  const onClickBook = (book) => {
    setBook(book);
  }

  



  return (
    <div className={style.App}>
      <Header className={style.Header}/>
      <SearchBar onSearch = {onSearch}/>
      <Container query={term} handle = {onClickBook} setOpenModal={setOpenModal}/>
      { openModal && <BookModal book = {book} closeModal = {setOpenModal} />}
    </div>
  );
}

export default App
