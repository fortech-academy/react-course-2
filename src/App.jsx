import axios from "axios";
import Layout from "./layouts/Layout";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    var username = "user";
    var password = "password";
    var credentials = btoa(username + ":" + password);
    // var basicAuth = "Basic " + credentials;

    axios.post(
      "https://team1-backend-sgvb3cnbwa-uc.a.run.app/login",
      {},
      {
        auth: {
          username: username,
          password: credentials,
        },
      }
    );
  }, []);

  // async function a() {}

  // const b = async () => {};

  // const getExample = async () => {
  //   const book = { title: "" };
  //   const response = await fetch("http://localhost:3000/api/example", {
  //     method: "POST",
  //     body: JSON.stringify(book),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  return <Layout />;
}

export default App;
