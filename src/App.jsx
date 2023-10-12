// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// import { useEffect, useState } from "react";
import AddBook from "./pages/book/AddBook";
import BooksList from "./pages/book/BooksList";
import { useEffect, useState } from "react";

export default function App() {
  // const [isVisible, setIsVisible] = useState(true);

  // const handleChangeVisibility = () => {
  //   setIsVisible((prevIsVisible) => !prevIsVisible);
  // };

  // useEffect(() => {
  //   console.log("App mounted");
  // }, []);
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  useEffect(() => {
    fetch("https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);

  return (
    <>
      <BooksList books={books} />
      <AddBook onAddBook={addBook} />
      {/* {isVisible && <ComponentA />}
      <ComponentB />
      <button onClick={handleChangeVisibility}>
        Set component A visibility
      </button>
      {/* <p>{messages}</p>
      <p className="p-class">Is ok?</p>
      <p>{isOk}</p>
      <button onClick={handleClick}> Click me</button>
      <input onChange={handleChange}></input>
      <Counter></Counter> */}
    </>
  );
}
