import "./style/ReviewCard.css";

const ReviewCard = ({ title, review_img_url }) => {
  return (
    <section id="game-card">
      <h3>{title}</h3>
      <figure id="game-image">
        <img src={review_img_url} alt="game prototype" />
      </figure>
    </section>
  );
};

export default ReviewCard;
