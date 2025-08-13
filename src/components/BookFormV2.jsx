import React, { useRef } from "react";
import classes from "./BookForm.module.css";

function BookFormV2() {
  let titleRef = useRef("");
  let yearRef = useRef("");
  let editorRef = useRef("");
  let SummaryRef = useRef("");
  let authorRef = useRef("");
  let imageRef = useRef("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(titleRef.current.value);
    // console.log(yearRef.current.value);
    // console.log(imageRef.current.value);
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
      <div className={classes.actions}>
        <button type="submit">Ajouter Livre</button>
      </div>
    </form>
  );
}

export default BookFormV2;