import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";

function AllBooks() {
  let [tabBooks, setTabBooks] = useState([]);

  useEffect(() => {
    fetch("https://gestion-livre-49710-default-rtdb.firebaseio.com/Films.json")
      .then((response) => response.json())
      .then((data) => {
        // let tabHela = [];
        // console.log("data", data);
        // for (const key in data) {
        //   console.log(key);
        //   tabHela.push({ idHela: key, ...data[key] });
        // }
        // console.log("tabHela", tabHela);

        let newTab = Object.keys(data).map((cle) => ({
          id: cle,
          ...data[cle],
          //   title: data[cle].title,
          //   image: data[cle].image,
          //   editor: data[cle].editor,
          //   summary: data[cle].summary,
          //   year: data[cle].year,
        }));
        console.log(data);
        console.log(newTab);

        setTabBooks(newTab);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Searchbar filtredBook={setTabBooks}></Searchbar>
      <BookList livres={tabBooks}></BookList>
    </>
  );
}

export default AllBooks;

//   let MY_DATA = [
//     {
//       id: 1,
//       title: "The Outsider",
//       author: "Albert Camus",
//       year: 1942,
//       publisher: "Secker & Warburg",
//       image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
//     },
//     {
//       id: 2,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       year: 1960,
//       publisher: "J.B. Lippincott & Co.",
//       image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
//     },
//     {
//       id: 3,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       year: 1925,
//       publisher: "Charles Scribner's Sons",
//       image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
//     },
//     {
//       id: 4,
//       title: "100 Years of Solitude",
//       author: "Gabriel G Marquez",
//       year: 1967,
//       publisher: "Harper & Row",
//       image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
//     },
//     {
//       id: 5,
//       title: "Moby Dick",
//       author: "Herman Melville",
//       year: 1851,
//       publisher: "Harper & Brothers",
//       image: "https://covers.openlibrary.org/b/id/7222256-L.jpg",
//     },
//     {
//       id: 6,
//       title: "War and Peace",
//       author: "Leo Tolstoy",
//       year: 1869,
//       publisher: "The Russian Messenger",
//       image: "https://covers.openlibrary.org/b/id/7222261-L.jpg",
//     },
//   ];