import axios from "axios";
import { API_KEY } from "@/private";
import { VideoType } from "@/types/types";

const fetchVideos = async () => {
  const videosSaved = localStorage.getItem("videos");
  if (videosSaved) {
    console.log("returning saved videos");
    return JSON.parse(videosSaved);
  } else {
    const options = {
      method: "GET",
      url: "https://yt-api.p.rapidapi.com/trending",
      params: { geo: "IN", lang: "hi" },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("fetch successfull");
      let data = response.data.data;
      data = data.filter((video: VideoType) => video.type === "video");
      localStorage.setItem("videos", JSON.stringify(data));
      return data;
    } catch (error) {
      console.error(error);
    }
  }
};

export default fetchVideos;
