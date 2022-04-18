import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom"
import TopStories from './TopStories'
import TopBooks from './TopBooks'
import HomePage from './HomePage'

const Navbar = () => {



    return (
        <div>
            <Route path="/"><HomePage/></Route>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Navbar;

//import BrowserRouter from react-router-dom
//switch statement, defaulting to TopStories