import React, { useEffect, useState } from "react";
import { getBooks } from "../services/api";

const BooksList = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((data) => {
        console.log("Libros obtenidos desde la API:", data); // 👈 Esto mostrará los datos en la consola
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando libros:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Lista de Libros</h1>
      {loading ? (
        <p>Cargando libros...</p>
      ) : books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros disponibles.</p>
      )}
    </div>
  );
};

export default BooksList;
