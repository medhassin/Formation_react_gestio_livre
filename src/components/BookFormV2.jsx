import React, { useEffect, useRef, useState } from "react";
import classes from "./BookForm.module.css";
import axios from "axios";

function BookFormV2() {
  let titleRef = useRef("");
  let yearRef = useRef("");
  let editorRef = useRef("");
  let SummaryRef = useRef("");
  let authorRef = useRef("");
  let imageRef = useRef("");

  let [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("https://filmstore-409b9-default-rtdb.firebaseio.com/authors.json")
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
    console.log({
      title: titleRef.current.value,
      year: yearRef.current.value,
      editor: editorRef.current.value,
      summary: SummaryRef.current.value,
      image: imageRef.current.value,
      author: authorRef.current.value,
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
        <label htmlFor="">Image</label>
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