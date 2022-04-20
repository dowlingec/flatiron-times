import { useState } from 'react'

const StoriesNav = ({}) => {
    
    let [filterBy, setFilterBy] = useState("exciting")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(filterBy.toLowerCase())
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Find a story..." onChange={(e) => {setFilterBy(e.target.value)}}></input>
                <button type="submit" >GO!</button>
            </form>

        </div>
    )
}

export default StoriesNav;