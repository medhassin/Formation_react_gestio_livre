import React, { useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "mohamed@gmail.com",
    password: "azerty",
    username: "mohamed",
  });
  console.log("STATE", formValue);

  function toggleShowLogin() {
    setShowLogin((previous) => !previous);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (showLogin) {
    } else {
      axios
        .post(
          "https://gestion-livre-49710-default-rtdb.firebaseio.com/users.json",
          { ...formValue, role: "user" }
        )
        .then((response) => {
          alert("Inscription réussie");
          setShowLogin(true);
        });
    }
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="">{showLogin ? "Login" : "Email"}</label>
        <input
          type="text"
          onChange={(e) =>
            setFormValue((previous) => {
              return { ...previous, email: e.target.value };
            })
          }
        />
      </div>
      {!showLogin && (
        <div className={classes.control}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            onChange={(e) =>
              setFormValue((previous) => {
                return { ...previous, username: e.target.value };
              })
            }
          />
        </div>
      )}

      <div className={classes.control}>
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={(e) =>
            setFormValue((previous) => {
              return { ...previous, password: e.target.value };
            })
          }
        />
      </div>
      <div className={classes.actions}>
        {showLogin ? (
          <>
            <button type="submit">Login</button>
            <button type="button" onClick={toggleShowLogin}>
              Switch to Register
            </button>
          </>
        ) : (
          <>
            <button type="submit">Register</button>
            <button type="button" onClick={toggleShowLogin}>
              Switch To Login
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default Login;