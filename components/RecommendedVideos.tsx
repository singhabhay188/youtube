import { ScrollArea } from "@/components/ui/scroll-area";
import formatNumber from "@/utils/smallThings/formatNumber";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { VideoData } from "@/types/types";

const RecommendedVideos = ({ videos }: { videos: VideoData[] | undefined }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (videos) {
      setLoading(false);
    }
  }, [videos]);

  if (loading) {
    return (
      <aside className="w-96 overflow-y-auto border-l hidden xl:block">
        <ScrollArea className="h-full">
          <div className="p-4">
            <h3 className="font-semibold mb-4">Up next</h3>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex gap-2 mb-4 animate-pulse">
                <div className="w-40 h-24 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </aside>
    );
  }

  return (
    <aside className="w-96 overflow-y-auto border-l hidden xl:block">
      <ScrollArea className="h-full">
        <div className="p-4">
          <h3 className="font-semibold mb-4">Up next</h3>
          {videos?.map((video, i) => (
            <Link
              href={`/video/${video.videoId}`}
              key={video.videoId}
            >
              <Card className="flex gap-2 mb-4 rounded-none items-center hover:scale-[101%] overflow-hidden">
                <div className="w-40 h-24 bg-red-900 relative">
                  <img
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg transition-transform"
                    src={video.thumbnail[0]?.url || "https://placehold.co/96x160"}
                    style={{
                      aspectRatio: "160/96",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="w-48">
                  <h4 className="font-semibold line-clamp-3">{video.title.length < 40 ? video.title : video.title.substring(0,40)+"..."}</h4>
                  <p className="text-sm text-gray-500">{video.channelTitle}</p>
                  <p className="text-sm text-gray-500">
                    {formatNumber(video.viewCount)} views • {video.publishedTimeText}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
};

export default RecommendedVideos;