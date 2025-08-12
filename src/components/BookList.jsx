import React from "react";
import "./BookList.css";
import BookItem from "./BookItem";
function BookList(props) {
  console.log(props);

  return (
    <ol className="list">
      <div className="row">
        {props.livres.map((element) => {
          return <BookItem key={element.id} unLivre={element}></BookItem>;
        })}
      </div>
    </ol>
  );
}

export default BookList;