import React from "react";
import "./BookItem.css";
import Card from "./Card";
import { useNavigate } from "react-router";
function BookItem(props) {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/films/" + props.unLivre.id)}
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