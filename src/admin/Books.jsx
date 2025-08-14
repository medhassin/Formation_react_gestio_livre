import React, { useEffect, useState } from "react";

function AllBooks() {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    fetch("https://gestion-livre-49710-default-rtdb.firebaseio.com/Films.json")
      .then((res) => res.json())
      .then((data) => {
        const tab = Object.keys(data).map((id) => ({ id, ...data[id] }));
        setBooks(tab);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://gestion-livre-49710-default-rtdb.firebaseio.com/Films/${id}.json`, {
      method: "DELETE",
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  };

  return (
    <div>
      <h2>Books ({books.length})</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Editor</th>
            <th>Year</th>
            <th>Author</th>
            <th>Image</th>
            <th>Summary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.editor}</td>
              <td>{b.year}</td>
              <td>{b.author}</td>
              <td>
                <img src={b.image} alt={b.title} width="60" />
              </td>
              <td>{b.summary?.substring(0, 30)}...</td>
              <td>
                <button onClick={() => handleDelete(b.id)}>delete</button>
                <button >modifie</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default AllBooks;
