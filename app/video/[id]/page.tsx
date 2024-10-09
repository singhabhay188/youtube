"use client";
import { usePathname } from "next/navigation";
import RecommendedVideos from "@/components/RecommendedVideos";
import VideoInfoLarge from "@/components/VideoInfoLarge";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoPage() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  console.log(id);

  return (
    <>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <VideoPlayer id={id} />
          <VideoInfoLarge id={id} />
        </div>
      </main>
      <RecommendedVideos />
    </>
  );
}
