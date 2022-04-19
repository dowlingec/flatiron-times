import {useState} from 'react'

const BookReviewForm = () => {

    const [toggleForm, setToggleForm] = useState(false)

    return (
        <div>
    <button onClick={()=>{setToggleForm(!toggleForm)}}>Leave a Review</button>
    {toggleForm ?
            <form>
                <textarea placeholder='Review' type='text' rows={5}/> <br />
                <input placeholder='Name' type='text'/>
                <input placeholder='Post Comment' type='submit'/>
            </form> : null
}
        </div>
    )
}

export default BookReviewForm;