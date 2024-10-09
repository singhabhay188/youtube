import React from "react";
import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react";

const VideoInfo = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">Video Title</h1>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            alt="Channel avatar"
            className="w-10 h-10 rounded-full mr-2"
            src="https://placehold.co/40"
          />
          <div>
            <p className="font-semibold">Channel Name</p>
            <p className="text-sm text-gray-500">1M subscribers</p>
          </div>
        </div>
        <div className="flex items-center">
          <Button className="mr-2">Subscribe</Button>
          <Button variant="secondary">
            <ThumbsUp className="mr-2 h-4 w-4" />
            Like
          </Button>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-700">1M views • 1 month ago</p>
        <p className="mt-2">
          Video description lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </>
  );
};

export default VideoInfo;
