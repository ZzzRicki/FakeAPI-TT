import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksList from "./pages/BooksList";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
