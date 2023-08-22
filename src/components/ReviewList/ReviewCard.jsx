import { Typography } from "@mui/material";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <Typography variant="h5">{review.rating} Stars</Typography>
      <Typography variant="h6">{review.text}</Typography>
    </div>
  );
};

export default ReviewCard;
