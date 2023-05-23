import { useContext } from "react";
import { UserContext } from "./ReactContext/UserContext";
import { VotesContext } from "./ReactContext/VotesContext";
import "./style/Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { username } = useContext(UserContext);
  const { votesOnReview } = useContext(VotesContext);

  return (
    <main>
      <h1>Welcome back, {username}!</h1>
      <section id="my-posts">
        <h2 id="my-comments">My Comments</h2>
        <p id="comment-box">No comments posted</p>
        <h2 id="my-votes">My Votes</h2>
        {votesOnReview.length > 0 ? (
          <ul>
            {votesOnReview.map(({ review_id, vote }) => {
              return (
                <li key={review_id}>
                  <Link className="links" to={`/reviews/${review_id}`}>
                    Review {review_id}:
                  </Link>{" "}
                  {vote === -1 ? "\u{1F44E}" : "\u{1F44D}"}
                </li>
              );
            })}
          </ul>
        ) : (
          <p id="vote-box">No reviews voted</p>
        )}
      </section>
    </main>
  );
};

export default Profile;
