import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-games-api-39ip.onrender.com/api",
});

export const fetchAllReviews = async () => {
  const response = await myApi.get("/reviews");

  return response.data.reviews;
};
