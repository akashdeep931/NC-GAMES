import { useState, useContext } from "react";
import "./style/Votes.css";
import { patchVoteCount } from "../api";
import { UserContext } from "./ReactContext/UserContext";
import { VotesContext } from "./ReactContext/VotesContext";
import { useNavigate } from "react-router-dom";

const Votes = ({ votes_count, review_id }) => {
  const navigate = useNavigate();
  const { username } = useContext(UserContext);
  const { votesOnReview, setVotesOnReview } = useContext(VotesContext);
  const [count, setCount] = useState(votes_count);
  const [err, setErr] = useState(null);
  console.log(err);

  const handleAddClick = () => {
    if (username) {
      setCount((currValue) => currValue + 1);
      patchVoteCount(review_id, { inc_votes: 1 })
        .then(() => {
          setVotesOnReview((currValue) => {
            for (let i = 0; i < currValue.length; i++) {
              if (
                currValue[i].review_id === review_id &&
                currValue[i].vote === -1
              ) {
                const modifiedData = [...currValue];
                modifiedData.splice(i, 1);
                return modifiedData;
              }
            }
            return [...currValue, { review_id, vote: 1 }];
          });
        })
        .catch((err) => {
          setCount((currValue) => currValue - 1);
          setErr({ err });
        });
    } else {
      navigate("/account");
    }
  };

  const handleSubtractClick = () => {
    if (username) {
      setCount((currValue) => currValue - 1);
      patchVoteCount(review_id, { inc_votes: -1 })
        .then(() => {
          setVotesOnReview((currValue) => {
            for (let i = 0; i < currValue.length; i++) {
              if (
                currValue[i].review_id === review_id &&
                currValue[i].vote === 1
              ) {
                const modifiedData = [...currValue];
                modifiedData.splice(i, 1);
                return modifiedData;
              }
            }
            return [...currValue, { review_id, vote: -1 }];
          });
        })
        .catch((err) => {
          setCount((currValue) => currValue + 1);
          setErr({ err });
        });
    } else {
      navigate("/account");
    }
  };

  return (
    <section id="votes">
      <button
        id="subtract"
        aria-label="Decrease votes by 1 or dislike"
        onClick={handleSubtractClick}
        disabled={
          votesOnReview.some(
            (vote) => vote.review_id === review_id && vote.vote === -1
          ) || err
        }
      >
        &#x1F44E;
      </button>
      <h4>Votes: {count}</h4>
      <button
        id="add"
        aria-label="Increase votes by 1 or like"
        onClick={handleAddClick}
        disabled={
          votesOnReview.some(
            (vote) => vote.review_id === review_id && vote.vote === 1
          ) || err
        }
      >
        &#x1F44D;
      </button>
      {err ? alert("Try Again later!") : null}
    </section>
  );
};

export default Votes;
