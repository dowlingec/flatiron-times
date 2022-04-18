import StoryCard from './StoryCard'

const TopStories = ({stories}) => {
    return(
        <div>
            {stories.map((element)=>{
               return( <StoryCard element={element} />)
            })}
        </div>
    )
}

export default TopStories;