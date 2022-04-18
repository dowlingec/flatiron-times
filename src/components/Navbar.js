import { BrowserRouter, Route, NavLink, Switch} from "react-router-dom"

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