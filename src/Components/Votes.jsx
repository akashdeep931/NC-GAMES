import { useState, useEffect } from "react";
import "./style/Votes.css";
import { updateVoteCount } from "../api";

const Votes = ({ votes_count, review_id }) => {
  const [count, setCount] = useState(votes_count);
  const [addDisabled, setAddDisabled] = useState(
    localStorage.getItem(`addDisabled_${review_id}`) === "true" ? true : false
  );
  const [subtractDisabled, setSubtractDisabled] = useState(
    localStorage.getItem(`subtractDisabled_${review_id}`) === "true"
      ? true
      : false
  );

  useEffect(() => {
    localStorage.setItem(`addDisabled_${review_id}`, addDisabled);
  }, [addDisabled, review_id]);

  useEffect(() => {
    localStorage.setItem(`subtractDisabled_${review_id}`, subtractDisabled);
  }, [subtractDisabled, review_id]);

  const handleAddClick = () => {
    setCount((currValue) => currValue + 1);
    setAddDisabled(true);
    setSubtractDisabled(false);
    updateVoteCount(review_id, { inc_votes: 1 });
  };

  const handleSubtractClick = () => {
    setCount((currValue) => currValue - 1);
    setSubtractDisabled(true);
    setAddDisabled(false);
    updateVoteCount(review_id, { inc_votes: -1 });
  };

  return (
    <section id="votes">
      <button
        id="subtract"
        aria-label="Decrease by 1"
        onClick={handleSubtractClick}
        disabled={subtractDisabled}
      >
        -
      </button>
      <h4>Votes: {count}</h4>
      <button
        id="add"
        aria-label="Increase by 1"
        onClick={handleAddClick}
        disabled={addDisabled}
      >
        +
      </button>
    </section>
  );
};

export default Votes;
