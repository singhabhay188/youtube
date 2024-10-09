"use client";
import Video from "@/components/Video";
import VideoLoader from "@/components/VideoLoader";
import { VideoType } from "@/types/types";
import fetchSearch from "@/utils/fetchSearch";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  console.log(q);

  if(!q) return <h2 className="text-2xl font-bold mb-4">No search query found</h2>

  const [videos, setVideos] = useState<VideoType[]>([]);
  
  useEffect(() => {
    async function getSearch() {
      if(q==null) return;      
      let fvideos = await fetchSearch(q);
      setVideos(fvideos);
    }
    //getSearch();
  }, []);


  return (
    <main className="flex-1 overflow-y-auto p-4 max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{q}"</h2>
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
