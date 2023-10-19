import axiosInstance from "../plugins/axiosConfig";

export const getBooks = async () => {
  const { data } = await axiosInstance.get("/books");
  return data.books.filter((book) => book.enabled);
};

export const getBookById = async (id) => {
  const { data } = await axiosInstance.get(`/books/${id}`);
  return data;
};

export const postBook = async (book) => {
  const { data } = await axiosInstance.post("/books", book);
  return data;
};

export const deleteBook = async (id) => {
  const { data } = await axiosInstance.delete(`/books/${id}`);
  return data;
};

export const putBook = async (id, book) => {
  const { data } = await axiosInstance.put(`/books/${id}`, book);
  return data;
};
