import {useState, useEffect} from 'react'

const HomePage = () => {

    const [stories, setStories] = useState([])
    const [books, setBooks] = useState([])
    const [bookType, setBookType] = useState("combined-print-and-e-book-fiction")

    useEffect(()=> {
        (async () => {
            let req = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=HM3fGWpeNGnCSKoUF8hqhTL0rG2zPiIU')
            let res = await req.json()
            setStories(res.results)
        })()
    },[])

    useEffect(()=> {
        (async ()=> {
            let req = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${bookType}.json?api-key=iRJPKkGYCVWjOD0EpoTTGnwnITgw5LYo`)
            let res = await req.json()
            setBooks(res.results.books)
        })()
    },[bookType])


    return (
        <div>
            <button onClick={()=>{
                setBookType('combined-print-and-e-book-fiction')
                }}>Fiction</button>

            <button onClick={()=>{
                setBookType('combined-print-and-e-book-nonfiction')
            }}>Non-Fiction</button>

            <button onClick={()=>{
                setBookType('manga')
            }}>Manga</button>
            
            <button onClick={()=>{
                setBookType('animals')
            }}>Animals</button>

            <button onClick={()=>{
                setBookType('business-books')
            }}>Business</button>

            <button onClick={()=>{
                setBookType('education')
            }}>Education</button>

            <button onClick={()=>{
                setBookType('food-and-fitness')
            }}>Food & Fitness</button>

            <button onClick={()=>{
                setBookType('humor')
            }}>Humor</button>

            <button onClick={()=>{
                setBookType('science')
            }}>Science</button>

            <button onClick={()=>{
                setBookType('sports')
            }}>Sports</button>

            <button onClick={()=>{
                setBookType('travel')
            }}>Travel</button>
        </div>
    )
}

export default HomePage;