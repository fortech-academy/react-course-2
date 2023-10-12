import { useEffect, useState } from "react";

const BooksList = ({ books }) => {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
