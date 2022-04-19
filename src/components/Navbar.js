import { NavLink } from "react-router-dom"

// import HomePage from './HomePage'

const Navbar = () => {

    return (
        <div className="nav">
            <NavLink to="/" exact> Home </NavLink>
            <NavLink to="/topstories" exact> Top Stories </NavLink>
            <NavLink to="/topbooks" exact> Top Books </NavLink>
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