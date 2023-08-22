import ProductCard from "./ProductCard";
import { Typography } from "@mui/material";

const ProductList = ({ allProducts }) => {
  return (
    <div className="form-container">
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      {allProducts.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
