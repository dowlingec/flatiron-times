import StoryCard from './StoryCard'

const TopStories = ({stories}) => {
    return(
        <div>
            {stories.map((element)=>{
               return( <StoryCard element={element} key={element.url}/>)
            })}
        </div>
    )
}

export default TopStories;