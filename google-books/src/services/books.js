const getBooks = async (query) => {
    if (!query) return [];
    
    const api = 'https://www.googleapis.com/books/v1/volumes?q=' + query.split(' ').join('+');
    const response = await fetch(api);
    const json = await response.json();
    console.log(json.items);
    return json.items;
} 

export default getBooks;