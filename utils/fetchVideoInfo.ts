import axios from "axios";
import { API_KEY } from "@/private";
import { VideoInfoType, VideoType } from "@/types/types";

export default async function fetchVideoInfo(id: String) {
  const options = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/related",
    params: { id },
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    console.log("Response:",response.data);
    let data: VideoInfoType = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}
