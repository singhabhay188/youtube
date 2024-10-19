import { VideoType } from "@/types/types";
import formatViews from "@/utils/smallThings/formatNumber";
import modifyHiToEn from "@/utils/smallThings/modifyHiToEn";
import Link from "next/link";

type VideoProps = {
  video: VideoType;
  i: number;
};

function getThumbnail(video: VideoType["thumbnail"]): string {
  return video[2]?.url || video[1]?.url || video[0].url;
}

const Video = ({ video, i }: VideoProps) => {
  return (
    <Link href={`/video/${video.videoId}`} key={i} className="group">
      <div className="rounded-lg overflow-hidden w-full max-w-[450px] mx-auto">
        <img
          alt="Video thumbnail"
          className="w-full object-cover transition-transform group-hover:scale-105 min-h-[250px]"
          src={getThumbnail(video.thumbnail)}
          width="full"
        />
        <div className="p-2">
          <h3 className="font-semibold line-clamp-2">{video.title}</h3>
          <div className="items-center flex justify-between">
            <div className="flex items-center">
              <img
                alt="Channel thumbnail"
                className="w-10 h-10 rounded-full mr-2"
                src={video.channelThumbnail?.length>0 ? video.channelThumbnail[0]?.url : 'https://placehold.co/40'}
              />
              <p className="text-sm text-gray-500">{video.channelTitle}</p>
            </div>
            <p className="text-sm text-gray-500">
              {formatViews(video.viewCount)} • {modifyHiToEn(video.publishedTimeText)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
