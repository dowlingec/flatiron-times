import React from "react";
import { Route, Switch} from "react-router-dom"
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import TopStories from './components/TopStories';
import TopBooks from './components/TopBooks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/topstories">
          <TopStories />
        </Route>
        <Route exact path="/topbooks">
          <TopBooks />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;