import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    getAllProducts();
  }, []);
  async function getAllProducts() {
    try {
      let response = await axios.get(
        "http://products-reviews-api-mac.azurewebsites.net/api/Product"
      );
      console.log(response.data);
    } catch (e) {
      console.log("Error in getAllProducts: ", e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Product Review Site!</p>
      </header>
    </div>
  );
}

export default App;
