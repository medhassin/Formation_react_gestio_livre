import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import BookList from "../components/BookList";

function AllBooks() {
  const [tabBooks, setTabBooks] = useState([]);

  useEffect(() => {
    fetch("https://gestion-livre-49710-default-rtdb.firebaseio.com/Films.json")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const booksArray = Object.entries(data).map(([id, book]) => ({
            id,
            ...book,
          }));
          setTabBooks(booksArray);
        } else {
          setTabBooks([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
   
      <Searchbar>
        <h1>Je suis la barre de recherche</h1>
      </Searchbar>

       <BookList livres={tabBooks} />

      
    </>
  );
}

export default AllBooks;
