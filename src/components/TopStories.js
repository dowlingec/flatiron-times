import StoryCard from './StoryCard'
import StoriesNav from './StoriesNav'

const TopStories = ({stories, setFilterBy }) => {
    
    return(

        <div >
            <StoriesNav setFilterBy={setFilterBy}/><br/>
            <div className='top-stories'>
                {stories.map((element)=>{
               return( <StoryCard element={element} key={element.url}/>)
                })}
            </div>
        </div>
    )
}

export default TopStories;