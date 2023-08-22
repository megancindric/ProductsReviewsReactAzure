import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard review={review} key={index} />
      ))}
    </div>
  );
};

export default ReviewList;
