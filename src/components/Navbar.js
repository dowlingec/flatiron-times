import { NavLink } from "react-router-dom"
// import WebFont from 'webfontloader';


const Navbar = () => {

    return (
        <div className="nav">
            <div className="page-header"><h1>The Flatiron Times</h1><hr></hr></div>
           <div className='left-nav'>
               <NavLink to="/" exact> Flatiron Times </NavLink>
            </div>
           <div className='mid-nav'>
               <NavLink to="/topstories" exact>Top Stories </NavLink>
            </div>
           <div className='right-nav'>
               <NavLink to="/topbooks" exact> Top Books </NavLink>
            </div>
            <div className="end-nav">
                <NavLink to="/fakenews">Fake News</NavLink>
            </div>
            <hr></hr>
            <hr></hr>
        </div>
    )
}

export default Navbar;