import BookCard from "../bookCard/BookCard.jsx"
import style from "./Container.module.scss"
import getBooks from "../../services/books.js"
import { useState } from "react"
import { useEffect } from "react"


const Container = ({query}) => {
    // Create an empty array ready to store books
    const [results, setResults] = useState([]); 
    
    // Pass the term to books to get back the result
    useEffect(() => {
        getBooks(query).then((books) => {setResults(books)}) ;
    }, [query]);
    // Display the result 

    return (
        <div className={style.Container}>
        {
            results && results.map((book) => {
               return <BookCard key={book.id} result={book} />
            })
        }            
        </div>
    )
};

export default  Container