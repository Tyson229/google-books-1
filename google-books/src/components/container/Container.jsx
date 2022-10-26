import BookCard from "../bookCard/BookCard"
import style from "./Container.module.scss"
import getBooks from "../../services/books.js"
import { useState } from "react"
import { useEffect } from "react"


const Container = ({query}) => {
    // Create an empty array ready to store books
    const [results, setResults] = useState([]); 
    
    // Pass the term to books to get back the result
    useEffect(() => {
        getBooks(query).then((books) => setResults(books.items)) ;
        console.log(results)
    }, [query])
    // Display the result 

    return (
        <div className={style.Container}>
            {/* {results.map((element) => (
                <BookCard book={element}/> 
            ))} */}

            {
                results ? (
                    results.map(() => {
                        <BookCard/>
                    })
                )
               
                :
                <h2>Nothing</h2>
            }
        </div>
    );
};

export default  Container