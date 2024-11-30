import { VideoType } from "@/types/types"
import formatViews from "@/utils/smallThings/formatNumber"
import modifyHiToEn from "@/utils/smallThings/modifyHiToEn"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

type VideoProps = {
  video: VideoType
  i: number
}

function getThumbnail(video: VideoType["thumbnail"]): string {
  return video[2]?.url || video[1]?.url || video[0].url
}

export default function VideoNew({ video, i }: VideoProps) {
  return (
    <Link href={`/video/${video.videoId}`} key={i} className="group">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg max-w-[500px]">
        <div className="aspect-video relative overflow-hidden">
          <Image
            alt={`Thumbnail for ${video.title}`}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
            src={getThumbnail(video.thumbnail)}
            width={500}
            height={281}
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg line-clamp-2 mb-2">{video.title}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={video.channelThumbnail?.[0]?.url || ''} alt={`${video.channelTitle} avatar`} />
              <AvatarFallback>{video.channelTitle.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-sm text-muted-foreground">{video.channelTitle}</p>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>{formatViews(video.viewCount)} views</p>
            <p>{modifyHiToEn(video.publishedTimeText)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}