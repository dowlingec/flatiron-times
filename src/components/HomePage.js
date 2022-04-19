import BookReviewForm from './BookReviewForm'
import StoryCommentForm from './StoryCommentForm'


const HomePage = ({books, stories}) => {


    if (books.length > 0 && stories.length > 0) { //waits for fetch to fill arrays and then populates HomePage with first entry from each
        const {author, description, rank, title} = books[0]
        const image = books[0].book_image
    
        const storyTitle = stories[0].title
        const {abstract, url, byline} = stories[0]
        const storyImage = stories[0].multimedia[1].url
        const caption = stories[0].multimedia[1].caption


    return (
        <div>
            <h1>HI!</h1>
            <li className='book-card'>
                <h4>Rank: {rank}</h4>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <h4>Author: {author}</h4>
                <p>{description}</p>
                <BookReviewForm />
            </li>   
            <h4> <a href={url} target={"_blank"}>{storyTitle}</a> </h4>
            <img src={storyImage} alt={storyTitle}/>
            <p>{caption}</p>
            <p>{abstract}</p>
            <h4>{byline}</h4>
            <StoryCommentForm />
        </div>
    )
    }
}

export default HomePage;