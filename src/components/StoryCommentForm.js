import {useState} from 'react'

const StoryCommentForm = () => {

    const [toggleForm, setToggleForm] = useState(false)

    return(
        <div>
    <button onClick={()=>{setToggleForm(!toggleForm)}}>Leave a Comment</button>
    {toggleForm ?
            <form>
                <textarea placeholder='Comment' type='text' rows={5}/> <br />
                <input placeholder='Name' type='text'/>
                <input placeholder='Post Comment' type='submit'/>
            </form> : null
}
        </div>
    )
}

export default StoryCommentForm;