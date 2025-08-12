import React from "react";
import { useParams } from "react-router";

function BookDetails() {
  let p = useParams();
  return <div>Book with ID = {p.filmId} </div>;
}

export default BookDetails;