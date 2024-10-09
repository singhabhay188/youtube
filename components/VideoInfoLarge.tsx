import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { VideoInfoType } from "@/types/types";
import { useEffect, useState } from "react";
import LoaderVideoInfo from "./LoaderVideoInfo";
import fetchVideoInfo from "@/utils/fetchVideoInfo";
import formatViews from "@/utils/smallThings/formatNumber";
import formatDays from "@/utils/smallThings/formatDays";

const VideoInfoLarge = ({ id }: { id: string }) => {
    const [videoInfo, setVideoInfo] = useState<undefined | VideoInfoType>(undefined);

    useEffect(() => {
        async function getVideoInfo() {
            console.log('getting video info');
            let info = await fetchVideoInfo(id);
            console.log(info);
            setVideoInfo(info);
          }
          getVideoInfo();
    },[]);

    if(videoInfo == null) {
        return <LoaderVideoInfo />
    }
    return (
        <>
            <h1 className="text-2xl font-bold mb-2">{videoInfo.title}</h1>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <p className="font-semibold">{videoInfo.channelTitle}</p>
                </div>
                <div className="flex items-center">
                    <Button className="mr-2">Subscribe</Button>
                    <Button variant="secondary">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {formatViews(videoInfo.viewCount)}
                    </Button>
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">{formatViews(videoInfo.viewCount)}</p>
                <p className="text-sm text-gray-700">{formatDays(videoInfo.uploadDate)}</p>
                <p className="mt-2">{videoInfo.description}</p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                {/* Add comments section here */}
            </div>
        </>
    )
}

export default VideoInfoLarge