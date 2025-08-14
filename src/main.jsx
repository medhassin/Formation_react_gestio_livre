import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import FavouriteContextProvider from "./store/FavouritesContext.jsx";
import LoginContextProvider from "./store/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContextProvider>
      <FavouriteContextProvider>
        <App />
      </FavouriteContextProvider>
    </LoginContextProvider>
  </BrowserRouter>
);