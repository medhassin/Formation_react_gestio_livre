import React from 'react'
import classes from "./navbar.module.css";
import { Link, NavLink } from "react-router"
export default function Navbar() {
  return (
    <div className={classes.header}>
        <div className={classes.logo}>Book Shop</div>
        <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/all">All Books</Link> </li>
            <li><Link to="/Add">Add Books</Link></li>
            <li>
              {/*<Link to="/Favourites">Favourites</Link>*/}
              <NavLink to="/favourites">
              {({ isActive }) => {
                return (
                  <span className={isActive ? classes.activeclasse : null}>
                    Faourites 
                  </span>
                  
                );
              }}
              </NavLink>
              </li>
              <li><Link to="/Login">Login</Link></li>
        </ul>
    </div>
  )
}
