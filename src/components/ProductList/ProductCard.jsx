import { Card, CardContent, Typography } from "@mui/material";
import ReviewList from "../ReviewList/ReviewList";
const ProductCard = ({ product }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="h4" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="h4">Reviews:</Typography>
        <ReviewList reviews={product.reviews} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
