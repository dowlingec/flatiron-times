import React from "react";
import { Route, Switch} from "react-router-dom"
import {useState, useEffect} from 'react'
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import TopBooks from './components/TopBooks';
import FakeNewsContainer from "./components/FakeNewsContainer";


function App() {


  const [stories, setStories] = useState([])
  const [books, setBooks] = useState([])
  const [bookType, setBookType] = useState("combined-print-and-e-book-fiction")
  const [filterBy, setFilterBy] = useState("")
  

  useEffect(()=> {
      (async () => {
          let req = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=HM3fGWpeNGnCSKoUF8hqhTL0rG2zPiIU')
          let res = await req.json()
          setStories(res.results)
      })()
  },[])

  useEffect(()=> {
      (async ()=> {
          let req = await fetch(`https://api.nytimes.com/svc/books/v3/lists/${bookType}.json?api-key=iRJPKkGYCVWjOD0EpoTTGnwnITgw5LYo`)
          let res = await req.json()
          setBooks(res.results.books)
      })()
  },[bookType])
  
  let filteredStories = stories.filter((e) => { return (e.title.includes(filterBy)) })

  let storiesReturned = filteredStories ? filteredStories : stories

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage books={books} stories={stories}/>
        </Route>
        <Route exact path="/topstories">
          <TopStories stories={storiesReturned} setFilterBy={setFilterBy}/>
        </Route>
        <Route exact path="/topbooks">
          <TopBooks setBookType={setBookType} books={books}/>
        </Route>
        <Route exact path="/fakenews">
          <FakeNewsContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;