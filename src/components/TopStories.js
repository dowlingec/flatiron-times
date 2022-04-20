import StoryCard from './StoryCard'
import StoriesNav from './StoriesNav'

const TopStories = ({stories}) => {
    return(

        <div className='top-stories'>
            <StoriesNav />
            {stories.map((element)=>{
               return( <StoryCard element={element} key={element.url}/>)
            })}
        </div>
    )
}

export default TopStories;