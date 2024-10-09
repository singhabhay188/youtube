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
  id: string;
  title: string;
  lengthSeconds: string;
  keywords: string[];
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnail: Thumbnail[];
  allowRatings: boolean;
  viewCount: string;
  isPrivate: boolean;
  isUnpluggedCorpus: boolean;
  isLiveContent: boolean;
  isCrawlable: boolean;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  category: string;
  publishDate: string;
  publishedAt: string;
  uploadDate: string;
  isShortsEligible: boolean;
  subtitles: any;
  storyboards: any;
};
