import { Link } from "react-router-dom";
import "./style/ReviewCard.css";

const ReviewCard = ({ review_id, title, review_img_url }) => {
  return (
    <Link id="to-review-id" to={`/reviews/${review_id}`}>
      <section id="game-card">
        <h3>{title}</h3>
        <figure id="game-image">
          <img src={review_img_url} alt="game prototype" />
        </figure>
      </section>
    </Link>
  );
};

export default ReviewCard;
