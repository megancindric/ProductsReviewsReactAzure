import logo from "./sun.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList/ProductList";
import Typography from "@mui/material/Typography";
import AddProductForm from "./components/AddProductForm/AddProductForm";
function App() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  async function getAllProducts() {
    try {
      let response = await axios.get(
        "https://products-reviews-api-mac.azurewebsites.net/api/Product"
      );
      setAllProducts(response.data);
    } catch (e) {
      console.log("Error in getAllProducts: ", e);
    }
  }

  async function addNewProduct(newProduct) {
    try {
      let response = await axios.post(
        "https://products-reviews-api-mac.azurewebsites.net/api/Product",
        newProduct
      );
      getAllProducts(response.data);
    } catch (e) {
      console.log("Error in getAllProducts: ", e);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h2" gutterBottom>
          SolarReviewHub
        </Typography>
        <ProductList allProducts={allProducts} />
        <AddProductForm addNewProduct={addNewProduct} />
      </header>
    </div>
  );
}

export default App;
