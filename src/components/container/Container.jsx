import BookCard from "../bookCard/BookCard.jsx"
import style from "./Container.module.scss"
import getBooks from "../../services/books.js"
import { useState } from "react"
import { useEffect } from "react"
import ClipLoader from 'react-spinners/ClipLoader'


const Container = ({query, handle, setOpenModal, stopLoading, loading}) => {
    // Create an empty array ready to store books
    const [results, setResults] = useState([]);
    
    // State for loading spinner
    
    //const [loading, setLoading] = useState(true);
    // Pass the term to books to get back the result
    useEffect(() => {
        stopLoading();
        getBooks(query).then((books) => {setResults(books)}) ;
    }, [query]);

    if(loading)
        return <ClipLoader loading={loading} size={150}/>
        
    if(results){
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
                    <h2>Nothing Found</h2>
                </div>
            )
        }
        
    } else {
        return (
            <div className={style.Empty}>
                <h2>Let's search some book</h2>
            </div>
        )
    }
};

export default  Container