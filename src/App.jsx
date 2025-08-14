import { useContext, useState } from "react";
import Accueil from "./pages/Accueil";
import { Route, Routes } from "react-router";
import AllBooks from "./pages/AllBooks";
import Favourites from "./pages/Favourites";
import AddBook from "./pages/AddBook";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import { LoginContext } from "./store/LoginContext";
import Books from "./admin/Books";
import Authors from "./admin/Authors";

function App() {
  let logCtx = useContext(LoginContext);

  if (logCtx.isLogged) {
    if (logCtx.role == "user")
      return (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Accueil></Accueil>}></Route>
            <Route path="/all" element={<AllBooks></AllBooks>}></Route>
            <Route
              path="/favourites"
              element={<Favourites></Favourites>}
            ></Route>
            <Route
              path="/films/:filmId"
              element={<BookDetails></BookDetails>}
            ></Route>
            <Route path="/add" element={<AddBook></AddBook>}></Route>
          </Routes>
        </>
      );
    else
      return (
        <>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Accueil></Accueil>}></Route>
            <Route path="/books" element={<Books></Books>}></Route>
            <Route path="/authors" element={<Authors></Authors>}></Route>
            <Route path="/add" element={<AddBook></AddBook>}></Route>
          </Routes>
        </>
      );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Accueil></Accueil>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </>
    );
  }
}

export default App;