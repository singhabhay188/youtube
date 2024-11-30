"use client";
import { usePathname } from "next/navigation";
import RecommendedVideos from "@/components/RecommendedVideos";
import VideoInfoLarge from "@/components/VideoInfoLarge";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoInfoType } from "@/types/types";
import { useEffect, useState } from "react";
import fetchVideoInfo from "@/utils/fetchVideoInfo";

export default function VideoPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  console.log(id);

  const [videoInfo, setVideoInfo] = useState<undefined | VideoInfoType>(undefined);

  useEffect(() => {
    async function getVideoInfo() {
      console.log('getting video info');
      const info = await fetchVideoInfo(id);
      console.log(info);
      setVideoInfo(info);
    }
    getVideoInfo();
  }, [id]);

  return (
    <>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <VideoPlayer id={id} />
          <VideoInfoLarge videoInfo={videoInfo} />
        </div>
      </main>
      <RecommendedVideos videos={videoInfo?.data}/>
    </>
  );
}
