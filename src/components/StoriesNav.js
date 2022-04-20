import { useState } from 'react'
const StoriesNav = () => {
    let [filterBy, setFilterBy] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        return alert('Hello')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Find a story..." onChange={(e) => {setFilterBy(e.target.value)}}></input>
                <button type="submit" >GO!</button>
            </form>
            console.log({filterBy})
        </div>
    )
}

export default StoriesNav;