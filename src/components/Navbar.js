import { NavLink } from "react-router-dom"

// import HomePage from './HomePage'

const Navbar = () => {

    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/topstories">Top Stories</NavLink>
            <NavLink to="/topbooks">Top Books</NavLink>
        </div>
    )
}

export default Navbar;

//import BrowserRouter from react-router-dom
//switch statement, defaulting to TopStories
// ReactDOM.render(
//     <BrowserRouter>
//       <Navbar />
//       <Switch>
//         {/* <Route exact path="/about">
//           <About />
//         </Route>
//         <Route exact path="/login">
//           <Login />
//         </Route> */}
//         <Route exact path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );