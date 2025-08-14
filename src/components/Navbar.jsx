import React, { useContext } from "react";
import classes from "./navbar.module.css";
import { Link, NavLink } from "react-router";
import { FavouriteContext } from "../store/FavouritesContext";

function Navbar() {
  let favCtx = useContext(FavouriteContext);
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Book Shop</div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/all">All Books</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          {/* <Link to="/favourites">Favourites</Link> */}
          <NavLink to="/favourites">
            {({ isActive }) => {
              console.log(isActive);
              return (
                <span className={isActive ? classes.activeclasse : null}>
                  Favourites
                  <span class="badge text-bg-secondary">
                    {favCtx.nbFavourites}
                  </span>
                </span>
              );
            }}
          </NavLink>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;