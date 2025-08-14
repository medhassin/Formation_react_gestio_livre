import React, { useContext } from "react";
import classes from "./navbar.module.css";
import { Link, NavLink } from "react-router";
import { FavouriteContext } from "../store/FavouritesContext";
import { LoginContext } from "../store/LoginContext";

function Navbar() {
  let favCtx = useContext(FavouriteContext);
  let loginCtx = useContext(LoginContext);
  if (loginCtx.isLogged) {
    if (loginCtx.role == "user")
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
              <a onClick={() => loginCtx.seDeconnecter()}>Logout</a>
            </li>
          </ul>
        </div>
      );
    else {
      return (
        <div className={classes.header}>
          <div className={classes.logo}>Book Shop</div>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <a onClick={() => loginCtx.seDeconnecter()}>Logout</a>
            </li>
          </ul>
        </div>
      );
    }
  } else {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>Book Shop</div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;