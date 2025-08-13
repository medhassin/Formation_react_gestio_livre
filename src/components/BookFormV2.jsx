
import React, { useEffect, useRef, useState } from "react";
import classes from "./BookForm.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

function BookFormV2() {
  let titleRef = useRef("");
  let yearRef = useRef("");
  let editorRef = useRef("");
  let SummaryRef = useRef("");
  let authorRef = useRef("");
  let imageRef = useRef("");
  let navigate = useNavigate();

  let [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("https://gestion-livre-49710-default-rtdb.firebaseio.com/authors.json")
      .then((response) => {
        let newTab = Object.keys(response.data).map((cle) => ({
          id: cle,
          ...response.data[cle],
        }));
        setAuthors(newTab);
        console.log(newTab);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    let newBook = {
      title: titleRef.current.value,
      year: yearRef.current.value,
      editor: editorRef.current.value,
      summary: SummaryRef.current.value,
      image: imageRef.current.value,
      author: authorRef.current.value,
    };
    // Version avec Fetch
    // fetch("https://filmstore-409b9-default-rtdb.firebaseio.com/authors.json", {
    //   method: "POST",
    //   body: JSON.stringify(newBook),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   alert("Livre ajouté avec succès");
    //   navigate("/all");
    // });

    //Version avec Axios
    axios
      .post(
        "https://gestion-livre-49710-default-rtdb.firebaseio.com/Films.json",
        newBook
      )
      .then((response) => {
        alert("Livre ajouté avec succès");
        navigate("/all");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Year</label>
        <input type="text" ref={yearRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Editor</label>
        <input type="text" ref={editorRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Image</label>
        <input type="url" ref={imageRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Summary</label>
        <textarea cols={4} rows={4} ref={SummaryRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Author</label>
        <select ref={authorRef}>
          <option>-- Sélectionner --</option>
          {authors.map((element) => {
            return (
              <option key={element.id} value={element.id}>
                {element.prenom} {element.nom}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes.actions}>
        <button type="submit">Ajouter Livre</button>
      </div>
    </form>
  );
}

export default BookFormV2;