import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";
import LoaderVideoInfo from "./LoaderVideoInfo";
import formatNumber from "@/utils/smallThings/formatNumber";
import formatDays from "@/utils/smallThings/formatDays";
import { VideoInfoType } from "@/types/types";

const VideoInfoLarge = ({ videoInfo }: { videoInfo: VideoInfoType | undefined }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (!videoInfo) {
        return <LoaderVideoInfo />;
    }

    const toggleDescription = () => {
        setIsExpanded((prev) => !prev);
    };

    const truncatedDescription = videoInfo.meta.description.length > 200 
        ? `${videoInfo.meta.description.slice(0, 200)}...` 
        : videoInfo.meta.description;

    const formattedDescription = videoInfo.meta.description.replace(/\n/g, '<br />');

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">{videoInfo.meta.title}</h1>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="overflow-hidden border w-10 h-10 border-gray-500 rounded-full">
                        <img
                            alt="Channel thumbnail"
                            className="w-10 h-10 rounded-full mr-2"
                            src={videoInfo.meta.channelThumbnail[0]?.url || "https://placehold.co/40"}
                        />
                    </div>
                    <p className="font-semibold">{videoInfo.meta.channelTitle}</p>
                </div>
                <div className="flex items-center">
                    <Button className="mr-2">Subscribe</Button>
                    <Button variant="secondary">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {formatNumber(videoInfo.meta.likeCount) + " likes"}
                    </Button>
                </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700">{formatNumber(videoInfo.meta.viewCount) + " views"}</p>
                <p className="text-sm text-gray-700">{formatDays(videoInfo.meta.publishedAt)}</p>
                <div className="my-4 border-b-2 border-gray-500 w-full"></div>
                <p className="mt-2" dangerouslySetInnerHTML={{ __html: isExpanded ? formattedDescription : truncatedDescription.replace(/\n/g, '<br />') }} />
                {videoInfo.meta.description.length > 200 && (
                    <Button onClick={toggleDescription} className="mt-2">
                        {isExpanded ? "Show Less" : "Show More"}
                    </Button>
                )}
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Comments</h2>
                {/* Add comments section here */}
            </div>
        </>
    );
};

export default VideoInfoLarge;
