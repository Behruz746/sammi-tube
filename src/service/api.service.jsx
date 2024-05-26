import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "80",
  },
  headers: {
    "x-rapidapi-key": `${import.meta.env.VITE_PUBLIC_API_KEY}`,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response;
  },
};
