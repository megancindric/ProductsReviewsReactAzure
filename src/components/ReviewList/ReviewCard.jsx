const ReviewCard = ({ review }) => {
  return (
    <div>
      {review.rating} - {review.text}
    </div>
  );
};

export default ReviewCard;
