"use client";
import fetchVideos from "@/utils/fetchVideos";
import { useEffect, useState } from "react";
import { VideoType } from "@/types/types";
import Video from "@/components/Video";
import VideoLoader from "@/components/VideoLoader";

export default function HomePage() {
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    async function getvideos() {
      const fvideos = await fetchVideos();
      setVideos(fvideos);
    }
    getvideos();
  }, []);

  return (
    <main className="flex-1 overflow-y-auto p-4 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Recommended</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.length === 0 ? (
          Array.from({ length: 12 }).map((_, i) => <VideoLoader key={i} />)
        ) : (
          videos.map((video, i) => <Video key={i} video={video} i={i} />)
        )}
      </div>
    </main>
  );
}
