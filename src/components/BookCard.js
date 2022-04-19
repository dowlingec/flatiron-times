import BookReviewForm from "./BookReviewForm"

const BookCard = ({element}) => {

    const {author, description, rank, title} = element
    const image = element.book_image
    const link = element.amazon_product_url

    return(
        <div className="book-card">
            <li className='book-card'>
                <h4>Rank: {rank}</h4>
                <img src={image} alt={title} /> <br />
                <a href={link} target={"_blank"}>{title}</a>
                <h4>Author: {author}</h4>
                <p>{description}</p>
                <BookReviewForm />
            </li>
        </div>
    )
}

export default BookCard;