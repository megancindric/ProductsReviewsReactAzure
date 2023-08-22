import logo from "./sun.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  async function getAllProducts() {
    try {
      let response = await axios.get(
        "http://products-reviews-api-mac.azurewebsites.net/api/Product"
      );
      setAllProducts(response.data);
    } catch (e) {
      console.log("Error in getAllProducts: ", e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to the Product Review Site!</p>
        <ProductList allProducts={allProducts} />
      </header>
    </div>
  );
}

export default App;
