import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BooksList from "./pages/book/BooksList";
import CreateBook from "./pages/book/CreateBook";
import ViewBook from "./pages/book/ViewBook";
import EditBook from "./pages/book/EditBook";
import AdminPage from "./pages/admin/AdminPage";
import { Provider } from "react-redux";
import store from "./stores/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/books", element: <BooksList /> },
      { path: "/books/create", element: <CreateBook /> },
      { path: "/books/:bookId", element: <ViewBook /> },
      { path: "/books/:bookId/edit", element: <EditBook /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/account", element: <div>Account</div> },
    ],
  },
]);

//JSX
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
