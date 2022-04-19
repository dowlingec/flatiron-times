import BookCard from './BookCard'

const TopBooks = ({setBookType, books}) => {

    return(
        <div className='top-books'>
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

            {books.map((element)=>{
               return( <BookCard element={element} key={element.rank}/>)
            })}
        </div>
    )
}

export default TopBooks;