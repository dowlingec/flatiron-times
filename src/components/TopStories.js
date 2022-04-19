import StoryCard from './StoryCard'

const TopStories = ({stories}) => {
    return(
        <div className='top-stories'>
            {stories.map((element)=>{
               return( <StoryCard element={element} key={element.url}/>)
            })}
        </div>
    )
}

export default TopStories;