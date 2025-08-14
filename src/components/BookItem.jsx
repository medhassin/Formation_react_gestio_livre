import React, { useContext } from "react";
import "./BookItem.css";
import Card from "./Card";
import { replace, useNavigate } from "react-router";
import { FavouriteContext } from "../store/FavouritesContext";
function BookItem(props) {
  let navigate = useNavigate();
  let favCtx = useContext(FavouriteContext);
  console.log(favCtx);

  return (
    <div
      onClick={() => navigate(`/films/${props.unLivre.id}`, { replace: false })}
      className="item col-md-4"
    >
      <Card>
        <div className="image">
          <img src={props.unLivre.image}></img>
        </div>
        <div className="content">
          <h3>{props.unLivre.title}</h3>
          <address> {props.unLivre.year} </address>
        </div>
        <div className="actions">
          <button>Add to Favourites</button>
        </div>
      </Card>
    </div>
  );
}

export default BookItem;