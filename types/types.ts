export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

export type VideoType = {
  type: string;
  videoId: string;
  title: string;
  channelTitle: string;
  channelId: string;
  channelHandle: string;
  channelThumbnail: Thumbnail[];
  description: string;
  viewCount: string;
  publishedTimeText: string;
  lengthText: string;
  thumbnail: Thumbnail[];
  richThumbnail: Thumbnail[];
};

export type VideoInfoType = {
  meta: {
    videoId: string;
    title: string;
    viewCount: string;
    likeCount: string;
    superTitle: string;
    publishDate: string;
    publishedAt: string;
    channelId: string;
    channelHandle: string;
    channelTitle: string;
    channelThumbnail: Thumbnail[];
    subscriberCountText: string;
    subscriberCount: number;
    channelBadges: string[];
    description: string;
    commentCountText: string;
    commentCount: number;
  };
  continuation: string;
  data: VideoData[];
  msg: string;
};

type VideoData = {
  type: string;
  videoId: string;
  title: string;
  lengthText: string;
  viewCount: string;
  publishedTimeText: string;
  publishDate: string;
  publishedAt: string;
  thumbnail: Thumbnail[];
  channelTitle: string;
  channelId: string;
  channelHandle: string;
  channelThumbnail: Thumbnail[];
}
