const BooksNav = ({setBookFilter}) => {
    return (
        <div>
            <input type='text' placeholder="Find a book..." onChange={(e)=>{setBookFilter(e.target.value)}}/>
        </div>
    )
}

export default BooksNav;