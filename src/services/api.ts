import axios from "axios";

const API_URL = "https://localhost:7269/api";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener libros:", error);
    return [];
  }
};

export const getBookById = async (id: number) => {
  // 👈 Asegura que esté exportado correctamente
  try {
    const response = await axios.get(`${API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener detalles del libro:", error);
    return null;
  }
};
