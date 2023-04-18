import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import ReviewCard from "./ReviewCard";
import "./style/Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then((data) => {
      setReviews(() => {
        return [...data];
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h2 id="reviews-header">Reviews</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <section id="games-list">
          {reviews.map(({ review_id, title, review_img_url }) => {
            return (
              <ReviewCard
                key={review_id}
                title={title}
                review_img_url={review_img_url}
              />
            );
          })}
        </section>
      )}
    </main>
  );
};

export default Reviews;
