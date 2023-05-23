import { createContext, useEffect, useState } from "react";

export const VotesContext = createContext();

export const VotesProvider = ({ children }) => {
  const [votesOnReview, setVotesOnReview] = useState(
    JSON.parse(localStorage.getItem("votesOnReview") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("votesOnReview", JSON.stringify(votesOnReview));
  }, [votesOnReview]);

  return (
    <VotesContext.Provider value={{ votesOnReview, setVotesOnReview }}>
      {children}
    </VotesContext.Provider>
  );
};
