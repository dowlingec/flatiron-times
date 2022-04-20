import BookReviewForm from './BookReviewForm'
import StoryCommentForm from './StoryCommentForm'


const HomePage = ({books, stories}) => {


    if (books.length > 0 && stories.length > 0) { //waits for fetch to fill arrays and then populates HomePage with first entry from each
        const {author, description, rank, title} = books[0]
        const image = books[0].book_image
        const link = books[0].amazon_product_url
    
        const storyTitle = stories[0].title
        const {abstract, url, byline} = stories[0]
        const storyImage = stories[0].multimedia[1].url
        const caption = stories[0].multimedia[1].caption


    return (
        <div>
            <h1>HOME</h1>
            <div className="homepage-div">
                <div className="home-left">
                        <img src={image} alt={title} /><br/>
                        <a href={link} target={"_blank"}>{title.toUpperCase()}</a> <br/>
                        <h4>Author: {author}</h4>
                        <p>{description}</p>
                </div>  
                <div className="home-right">
                    <img src={storyImage} alt={storyTitle}/><br/>
                    <a href={url} target={"_blank"}>{storyTitle.toUpperCase()}</a>
                    <p>{caption}</p>
                    <p>{abstract}</p>
                    <h4>{byline}</h4>
                </div>
            </div>
        </div>
    )
    }
}

export default HomePage;