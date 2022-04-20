
const StoriesNav = ({setFilterBy}) => {

    return(
        <div>
            <input type="text" placeholder="Find a story..." onChange={(e) => {setFilterBy(e.target.value)}}></input>
        </div>
    )
}

export default StoriesNav;