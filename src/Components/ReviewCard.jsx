import { useLocation, useNavigate } from "react-router-dom";
import "./style/ReviewCard.css";

const ReviewCard = ({ review_id, title, review_img_url }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const basePath = location.pathname;

  const handleClick = (event) => {
    event.preventDefault();
    if (basePath.includes("reviews")) navigate(`./${review_id}`);
    else navigate(`reviews/${review_id}`);
  };

  return (
    <section id="game-card" onClick={handleClick}>
      <h3>{title}</h3>
      <figure id="game-image">
        <img src={review_img_url} alt="game prototype" />
      </figure>
    </section>
  );
};

export default ReviewCard;
