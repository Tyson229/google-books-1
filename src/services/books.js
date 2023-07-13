const getBooks = async (query) => {
    // For empty query
    if (!query) return null;
    
    const api = 'https://www.googleapis.com/books/v1/volumes?q=' + query.split(' ').join('+');
    const response = await fetch(api);
    const json = await response.json();


    // If found results, return
    if(json.items)
        return json.items;
    return [];
} 

export default getBooks;