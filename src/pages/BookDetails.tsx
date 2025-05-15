import React, { useEffect, useState } from "react";
import { getBookById } from "../services/api";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams<{ id: string }>(); // 👈 Asegura que `id` no sea undefined
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    console.log("ID recibido:", id); // 👈 Verifica si el ID es correcto antes de llamar a la API
    if (id) {
      getBookById(Number(id))
        .then((data) => {
          console.log("Datos del libro obtenidos:", data); // 👈 Muestra la respuesta de la API en la consola
          setBook(data);
        })
        .catch((error) =>
          console.error("Error al obtener detalles del libro:", error)
        );
    }
  }, [id]);

  return (
    <div className="container">
      <h1>Detalles del Libro</h1>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default BookDetails;
