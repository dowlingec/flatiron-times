import {useState, useEffect} from 'react'
import TopBooks from './TopBooks'

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
            <TopBooks setBookType={setBookType} books={books}/>
        </div>
    )
}

export default HomePage;