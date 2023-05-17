const YOUTUBE_API_KEY = "AIzaSyBB6FfrKm28DNebmCGhv0hO6iiG5vv4n-U";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&part=contentDetails&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_CHANNEL_ID_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
  YOUTUBE_API_KEY;
