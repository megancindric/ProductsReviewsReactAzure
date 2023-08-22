import ReviewCard from "./ReviewCard";
import { Typography } from "@mui/material";
const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <ReviewCard review={review} key={index} />
        ))
      ) : (
        <Typography variant="h6">No reviews yet!</Typography>
      )}
    </div>
  );
};

export default ReviewList;
