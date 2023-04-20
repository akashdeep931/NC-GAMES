import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import { useEffect, useState } from "react";
import "./style/IndividualReview.css";
import { formatDate } from "./utils/utils";
import Comments from "./Comments";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [reviewById, setReviewById] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const date = formatDate(reviewById.created_at);

  useEffect(() => {
    fetchReviewById(review_id).then((data) => {
      setReviewById(data);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <main>
      <header>
        <h2>Review {review_id}</h2>
      </header>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <section>
          <article id="review">
            <h3>{reviewById.title}</h3>
            <h5>
              Created on: {date}
              <br />
              By: {reviewById.owner}
              <br />
              Category: {reviewById.category}
            </h5>
            <figure>
              <img src={reviewById.review_img_url} alt="game protoype" />
            </figure>
            <p>{reviewById.review_body}</p>
            <h4>Votes: {reviewById.votes}</h4>
          </article>
          <aside>
            <Comments
              review_id={review_id}
              comment_count={reviewById.comment_count}
            />
          </aside>
        </section>
      )}
    </main>
  );
};

export default IndividualReview;
