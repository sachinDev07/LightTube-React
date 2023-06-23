import { YOUTUBE_API_KEY } from "./youtubeApiKey";

// VIDEOS API
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

// YOUTUBE CHANNEL API
export const YOUTUBE_CHANNEL_ID_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=channelId&maxResults=50&key=" +
  YOUTUBE_API_KEY;

// YOUTUBE SEARCH API
export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=in&maxResults=11&type=video%2Cplaylist&key=" + YOUTUBE_API_KEY
