import { formatDate } from "./utils/utils";
import "./style/CommentCard.css";

const CommentCard = ({ body, author, created_at }) => {
  const date = formatDate(created_at);

  return (
    <section id="comment-card">
      <p>
        <span id="body">{body}</span>
        <br />
        <span id="author-date">
          By: {author}
          <br />
          {date}
        </span>
      </p>
    </section>
  );
};

export default CommentCard;
