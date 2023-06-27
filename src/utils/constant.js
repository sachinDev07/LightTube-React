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
export const YOUTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=in&maxResults=11&type=video%2Cplaylist&key=" +
  YOUTUBE_API_KEY;

export const OFFSET_LIVE_CHAT = 10;

export const commentsData = [
  {
    name: "Tarun",
    comment: "Great video! I learned a lot from it.",
    replies: [
      {
        name: "Himanshu Pali",
        comment: "I agree! The content was really informative.",
        replies: [
          {
            name: "Sahil",
            comment: "Yes, it was a well-explained video. Thanks for sharing!",
            replies: [
              {
                name: "Arun",
                comment:
                  "I enjoyed watching this. Looking forward to more videos!",
                replies: [
                  {
                    name: "Sunny",
                    comment:
                      "This video helped me understand the topic better. Thanks!",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Rohit",
            comment: "The examples in the video were really helpful. Good job!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ashish",
    comment:
      "I have a question regarding the topic discussed. Can someone help?",
    replies: [
      {
        name: "Rahul",
        comment: "Sure, I can try to help. What's your question?",
        replies: [],
      },
      {
        name: "Pooja",
        comment:
          "I'm not sure about the answer, but maybe someone else can assist you.",
        replies: [
          {
            name: "Sunny",
            comment: "I can help! Please share your question.",
            replies: [
              {
                name: "Pooja",
                comment: "Thanks, Sunny! My question is about...",
                replies: [
                  {
                    name: "Sunny",
                    comment:
                      "I think I can provide an answer. Here's what you need to know...",
                    replies: [
                      {
                        name: "Pooja",
                        comment:
                          "That cleared up my confusion. Thanks for your help!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Dinesh",
    comment: "Nice video! Keep up the good work.",
    replies: [
      {
        name: "Monu",
        comment:
          "I enjoyed watching it. Looking forward to more videos from you!",
        replies: [],
      },
    ],
  },
  {
    name: "Akhil",
    comment: "The content was really insightful. Thanks for sharing!",
    replies: [
      {
        name: "Sejal",
        comment: "I agree, Akhil! This video provided valuable information.",
        replies: [
          {
            name: "Bapi",
            comment: "I learned something new today. Thanks!",
            replies: [],
          },
          {
            name: "Shubham",
            comment:
              "The explanation was clear and easy to understand. Great job!",
            replies: [],
          },
          {
            name: "Nitesh",
            comment:
              "I appreciate the effort put into making this video. Well done!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Tanuj",
    comment: "I really liked the video. Looking forward to more content.",
    replies: [],
  },
];
