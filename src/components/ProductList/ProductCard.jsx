const ProductCard = ({ product }) => {
  return (
    <div>
      {product.name} - ${product.price}
    </div>
  );
};

export default ProductCard;
