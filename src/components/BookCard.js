const BookCard = ({element}) => {

    const {author, description, rank, title} = element
    const image = element.book_image

    return(
        <div>
            <li className='book-card'>
                <h4>Rank: {rank}</h4>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <h4>Author: {author}</h4>
                <p>{description}</p>



            </li>
        </div>
    )
}

export default BookCard;