import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { LoginContext } from "../store/LoginContext";
function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  let navigate = useNavigate();
  let logCtx = useContext(LoginContext);
  function toggleShowLogin() {
    setShowLogin((previous) => !previous);
  }

  function submitHandler(e) {
    e.preventDefault();
    if (showLogin) {
      fetch("https://gestion-livre-49710-default-rtdb.firebaseio.com/users.json")
        .then((res) => res.json())
        .then((data) => {
          let find = false;
          for (const key in data) {
            if (
              data[key].login == formValue.login &&
              data[key].password == formValue.password
            ) {
              alert("Connected");
              logCtx.seConnecter(data[key].role);
              navigate("/");
              find = true;
            }
          }
          if (!find) {
            alert("Indentifiants Invalides...");
            setFormValue({
              email: "",
              password: "",
              username: "",
            });
          }
        });
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