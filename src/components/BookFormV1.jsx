import React, { useState } from "react";
import classes from "./BookForm.module.css";

function BookFormV1() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  function titleUpdate(e) {
    setTitle(e.target.value);
  }
  function yearUpdate(e) {
    setYear(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(title, year);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">Title</label>
        <input type="text" onChange={titleUpdate} />
      </div>
      <div className={classes.control}>
        <label htmlFor="">Year</label>
        <input type="text" onChange={yearUpdate} />
      </div>
      <div className={classes.actions}>
        <button type="submit">Ajouter Livre</button>
      </div>
    </form>
  );
}

export default BookFormV1;