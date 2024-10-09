import axios from "axios";
import { API_KEY } from "@/private";
import { VideoType } from "@/types/types";

export default async function fetchSearch(query: String) {
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/search",
    params: { geo: "IN", query: query },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    let data = response.data.data;
    data = data.filter((video: VideoType) => video.type === "video");
    return data;
  } catch (error) {
    console.error(error);
  }
}
