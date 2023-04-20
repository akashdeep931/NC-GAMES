import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-api-39ip.onrender.com/api",
});

export const fetchAllReviews = async () => {
  const response = await myApi.get("/reviews");

  return response.data.reviews;
};

export const fetchReviewById = async (review_id) => {
  const response = await myApi.get(`/reviews/${review_id}`);

  return response.data.review;
};

export const fetchCommentByReview = async (review_id) => {
  const response = await myApi.get(`/reviews/${review_id}/comments`);

  return response.data.comments;
};

export const updateVoteCount = async (review_id, body) => {
  const response = await myApi.patch(`/reviews/${review_id}`, body);

  return response.data.review.votes;
};
