import { useEffect, useState } from "react";
import { fetchCommentByReview } from "../api";
import CommentCard from "./CommentCard";
import "./style/Comments.css";

const Comments = ({ review_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentByReview(review_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <section id="all-comments">
      <p>
        <em>Comments: {comment_count}</em>
      </p>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        comments.map(({ comment_id, author, created_at, body }) => {
          return (
            <CommentCard
              key={comment_id}
              author={author}
              created_at={created_at}
              body={body}
            />
          );
        })
      )}
    </section>
  );
};

export default Comments;
