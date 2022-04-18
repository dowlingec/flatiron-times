const StoryCard = ({element}) => {

    const {title, abstract, url, byline} = element

    return(
        <div>
            <h4>Title: {title}</h4>
            <p>{abstract}</p>
            <h4>By: {byline}</h4>
            <a href={url} target={"_blank"}>Article URL</a>
        </div>
    )
}

export default StoryCard;