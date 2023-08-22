import ProductCard from "./ProductCard";
import ReviewList from "../ReviewList/ReviewList";

const ProductList = ({ allProducts }) => {
  return (
    <div>
      {allProducts.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
          <ReviewList reviews={product.reviews} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
