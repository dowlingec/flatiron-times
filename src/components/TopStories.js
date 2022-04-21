import StoryCard from './StoryCard'
import StoriesNav from './StoriesNav'

const TopStories = ({stories, setFilterBy }) => {
    
    // let lowerCaseTitle = stories.el.title.toLowerCase() 
    
    // let testFilter = "ukraine"

    // const setStoriesToDisplay = lowerCaseTitle.includes(testFilter)

    // console.log("result" = setStoriesToDisplay)

    return(

        <div >
            {/* <h1>TOP STORIES</h1><br/> */}
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