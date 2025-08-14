import React, { useContext } from "react";
import BookList from "../components/BookList";
import { FavouriteContext } from "../store/FavouritesContext";

function Favourites() {
  let favCtx = useContext(FavouriteContext);
  return <BookList livres={favCtx.tabFavourites}></BookList>;
}

export default Favourites;