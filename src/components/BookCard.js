const BookCard = ({element}) => {
    const {author, description, rank, title} = element
    const image = element.book_image
    const link = element.amazon_product_url

    return(
        <div className="book-card">
                <div className="book-img">
                    <h3>Rank: {rank}</h3>
                    <img src={image} alt={title} /> <br />
                </div>
                <div className="book-abt">
                    <a href={link} target={"_blank"}>{title}</a>
                    <h4>By {author}</h4>
                    <p>{description}</p>
                </div>
        </div>
    )
}

export default BookCard;