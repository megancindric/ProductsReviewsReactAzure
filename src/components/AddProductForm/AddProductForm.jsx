import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import "./AddProductForm.css";
const AddProductForm = ({ addNewProduct }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newProduct = {
      name: name,
      price: price,
    };
    addNewProduct(newProduct);
  }
  return (
    <div className="form-container">
      <Typography variant="h4" gutterBottom>
        Add Product Form
      </Typography>

      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Product Name"
      />
      <TextField
        value={price}
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        label="Product Price"
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Add Product
      </Button>
    </div>
  );
};

export default AddProductForm;
