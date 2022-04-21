import StoryCommentForm from "./StoryCommentForm"


const StoryCard = ({element}) => {

    const {title, abstract, url, byline} = element
    const image = element.multimedia[1].url
    const caption = element.multimedia[1].caption

    return(
        <div className='story-card'>
           <h4> <a href={url} target={"_blank"}>{title}</a> </h4>
            <img src={image} alt={title} className="story-c-image"/>
            <p>{caption}</p>
            <p>{abstract}</p>
            <h4>{byline}</h4>
        </div>
    )
}

export default StoryCard;