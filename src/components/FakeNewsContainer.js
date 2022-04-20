import FakeNewsCard from "./FakeNewsCard";
import NewFakeNews from "./NewFakeNews";
import {useState, useEffect} from 'react'

const FakeNewsContainer = () => {

    const [fakeNews, setFakeNews] = useState([])

    useEffect(()=> {
        (async()=> {
            let req = await fetch('http://localhost:3001/fakeNews')
            let res = await req.json()
            setFakeNews(res)
        })()
    },[])


    return(
        <div className='fake-news'>
            <NewFakeNews setFakeNews={setFakeNews}/>
            {fakeNews.map((element)=> {
            return(    <FakeNewsCard element={element} key={element.id} setFakeNews={setFakeNews}/>)
            })}
        </div>
    )
}

export default FakeNewsContainer;