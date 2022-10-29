import BookCard from "../bookCard/BookCard.jsx"
import style from "./Container.module.scss"
import getBooks from "../../services/books.js"
import { useState } from "react"
import { useEffect } from "react"
import BookModal from "../bookModal/BookModal.jsx"


const Container = ({query, handle, setOpenModal}) => {
    // Create an empty array ready to store books
    const [results, setResults] = useState([]); 
    
    // Pass the term to books to get back the result
    useEffect(() => {
        getBooks(query).then((books) => {setResults(books)}) ;
    }, [query]);
    // Display the result 

    if(results.length){
        return (
            <div className={style.Container}>
            {
                results.map((book) => {
                    return ( <BookCard key={book.id}  result={book} handle={handle} setOpenModal={setOpenModal}/>
                    )})        
            }           
            </div>
        )
    } else {
        return (
            <div className={style.Empty}>
                <p>Let's search some book</p>
            </div>
        )
    }
};

export default  Container