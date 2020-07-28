import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => (
    <nav>
       <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
       <ul className="nav-menu">
         <li><Link className="nav-menu_link" to="/">Home</Link></li>
         <li><Link className="nav-menu_link" to="actors">Best Actors</Link></li>
         <li><Link className="nav-menu_link" to="actresses">Best Actresses</Link></li>
         <li><Link className="nav-menu_link" to="films">Best Film</Link></li>
       </ul>
     </nav>

    );


    export default Navbar;