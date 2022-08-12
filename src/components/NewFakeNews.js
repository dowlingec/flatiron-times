import {useState} from 'react'


const NewFakeNews = ({setFakeNews}) => {

    const [toggleForm, setToggleForm] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        caption: "",
        abstract: "",
        author: ""
    })

    const handleSubmit = async (e) => { //this try / catch throws an error alert for any error that may occur in this function
        try {
            e.preventDefault()
            let req = await fetch('http://localhost:3001/fakeNews',{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            if (req.ok){
                let res = await req.json()
                setFakeNews(prevState => [...prevState, res])
                setToggleForm(false)
            }
            else {
                alert("API DOWN")
            }
        } catch (error) {
            alert(error.message)
        }
    }

    return(
        <div className="form-w-button">
            <button onClick={()=>{setToggleForm(!toggleForm)}}>Add Your Story...</button>
        {toggleForm ?
        <form className='fake-news-form' onSubmit={handleSubmit}>
            <input type='text' placeholder='Title' onChange={(e)=>{setFormData({...formData, title:e.target.value})}}/><br/>
            <input type='text' placeholder='Image' onChange={(e)=>{setFormData({...formData, image:e.target.value})}}/><br/>
            <input type='text' placeholder='Caption' onChange={(e)=>{setFormData({...formData, caption:e.target.value})}}/><br/>
            <textarea type='text' rows={5} placeholder='Abstract' onChange={(e)=>{setFormData({...formData, abstract:e.target.value})}}/><br/>
            <input type='text' placeholder='Author' onChange={(e)=>{setFormData({...formData, author:e.target.value})}}/><br/>
            <input type='submit' value="Post Fake News"/>
        </form> : null
    }
        </div>
    )
}

export default NewFakeNews;