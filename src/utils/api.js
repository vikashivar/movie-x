import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzQ5ODA0MzczNmUwM2ZlOTE3ZDY4ZDg4MDFhMzU3YyIsInN1YiI6IjY1MWU0M2RjOGMyMmMwMDEwMzY0ZjQ4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uHIp7aOnkbuwqojy1f97XS-NOl78b5R8Pf6d-_CffzM";
const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};

export const featchDataFormApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
