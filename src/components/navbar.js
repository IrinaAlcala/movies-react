import React from "react";

const Navbar = (props) => (
    <nav>
       <h2 className="logo"><a className="logo-link" href="#">{props.title}</a></h2>
       <ul className="nav-menu">
         <li><a className="nav-menu_link" href="#">Home</a></li>
         <li><a className="nav-menu_link" href="#">Best Actors</a></li>
         <li><a className="nav-menu_link" href="#">Best Actresses</a></li>
         <li><a className="nav-menu_link" href="#">Best Film</a></li>
       </ul>
     </nav>

    );


    export default Navbar;