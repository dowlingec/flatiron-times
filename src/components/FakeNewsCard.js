import {useState} from 'react'

const FakeNewsCard = ({element, setFakeNews}) => {

    const [deleteBtn, setDeleteBtn] = useState(false)
    const {title, image, caption, abstract, author, id} = element

    const handleDelete = async (e) => {
        e.preventDefault()
        let req = await fetch(`http://localhost:3001/fakeNews/${id}`, {
            method: "DELETE"
        })
        setFakeNews((prevState) => {
            if (req.ok){
                let arr = prevState.filter((element)=>{
                    return(element.id !== id)
                })
                return arr
            }
        })
    }



    let deleteMsg = deleteBtn ? 'Are you sure?' : "Delete"

    return(
        <div className="fn-card">
            <h2>{title}</h2>
            <img className='fake-news-img' src={image} alt={title} /> <br/>
            <p>{caption}</p>
            <p>{abstract}</p>
            <h3>By: {author}</h3>
            <button onClick={()=>{setDeleteBtn(true)}}>{deleteMsg}</button><br/>
            {deleteBtn ? 
            <button onClick={handleDelete}>Yes</button>: null
        }
            {deleteBtn ? 
            <button onClick={()=>{setDeleteBtn(false)}}>No, take me back</button> : null
        }
        </div>
    )
}

export default FakeNewsCard;