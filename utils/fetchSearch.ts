import axios from "axios";
import { API_KEY } from "@/private";
import { VideoType } from "@/types/types";

const fetchSearch = async (query:string) => {
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
    console.log("fetch successfull for query:",query);
    let data = response.data.data;
    data = data.filter((video: VideoType) => video.type === "video");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchSearch;