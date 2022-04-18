import TopStories from './TopStories'
import TopBooks from './TopBooks'

const NavBar = () => {

    return (
        <div>
            <h3>Homepage</h3>
            <h3>Top Stories</h3>
            <TopStories />
            <h3>Top Books</h3>
            <TopBooks />
        </div>
    )
}

export default Navbar;

//import BrowserRouter from react-router-dom
//switch statement, defaulting to TopStories