import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./BookDetails.module.css";
import axios from "axios";
function BookDetails() {
  // let p = useParams();
  let { filmId } = useParams();
  let [selectedBook, setSelectedBook] = useState(null);
  let [selectedAuthor, setSelectedAuthor] = useState(null);

  useEffect(() => {
    fetch(
      `https://filmstore-409b9-default-rtdb.firebaseio.com/Films/${filmId}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedBook(data);
        axios
          .get(
            `https://filmstore-409b9-default-rtdb.firebaseio.com/authors/${data.author}.json`
          )
          .then((response) => {
            console.log(response.data);
            setSelectedAuthor(response.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filmId]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={classes.card}>
            <img className="card-img-top" src={selectedBook?.image}></img>
          </div>
          <div className={classes.cardbody}>
            <h5 className={classes.cardtext}>
              <strong>Titre</strong> : {selectedBook?.title}
            </h5>
            <p className={classes.cardtext}>
              <strong>Auteur</strong> : {selectedAuthor?.prenom}{" "}
              {selectedAuthor?.nom}
            </p>
            <p className={classes.cardtext}>
              <strong>Année de parution </strong>: {selectedBook?.year}
            </p>
            <p className={classes.cardtext}>
              <strong>Description</strong> : {selectedBook?.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;