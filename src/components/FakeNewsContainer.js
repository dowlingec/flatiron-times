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
            {/* <h2>Add your own story...</h2><br/> */}
            <NewFakeNews setFakeNews={setFakeNews}/>
            <div className="fn-map">
            {fakeNews.map((element)=> {
            return(    <FakeNewsCard element={element} key={element.id} setFakeNews={setFakeNews}/>)
            })}
            </div>
        </div>
    )
}

export default FakeNewsContainer;