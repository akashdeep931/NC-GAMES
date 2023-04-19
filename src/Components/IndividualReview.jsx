import { useParams } from "react-router-dom";
import { fetchReviewById } from "../api";
import { useEffect, useState } from "react";
import "./style/IndividualReview.css";

const IndividualReview = () => {
  const { review_id } = useParams();
  const [reviewById, setReviewById] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");

  useEffect(() => {
    fetchReviewById(review_id).then((data) => {
      setReviewById(data);
      setIsLoading(false);
    });
  }, [review_id]);

  useEffect(() => {
    const timestamp = reviewById.created_at;
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-UK", options);

    setDate(formattedDate);
  }, [reviewById]);

  return (
    <main>
      <h2>Review {review_id}</h2>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <section id="review">
          <h3>{reviewById.title}</h3>
          <h5>
            Created on: {date}
            <br />
            By: {reviewById.owner}
            <br />
            Category: {reviewById.category}
          </h5>
          {/* <div> */}
          <figure>
            <img src={reviewById.review_img_url} alt="game protoype" />
          </figure>
          <p>{reviewById.review_body}</p>
          {/* </div> */}
          <h4>Votes: {reviewById.votes}</h4>
        </section>
      )}
    </main>
  );
};

export default IndividualReview;
