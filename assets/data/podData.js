export default [
  {
    id: 705,
    podcastName: 'The Joe Rogan Experience',
    creator: 'Joe Rogan',
    podcastImageUri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Joe_Rogan_Experience_logo.jpg/220px-The_Joe_Rogan_Experience_logo.jpg',
    description:
      'From comedian, UFC commentator and TV host, Joe Rogan. "The Joe Rogan Experience" is a long form, in-depth conversation with the best guests from the comedy world, the sports world, the science world and everything between. One of the most popular comedy podcasts, this show has something for everyone.',
    latestEpisodes: [
      {
        id: 312,
        episodeName: '#1290 - Bryan Callen',
        length: 6720,
        timeStamp: new Date('2019-05-05T15:12:00').getTime()
      },
      {
        id: 311,
        episodeName: '#1289 - Eddie Izzard',
        length: 10320,
        timeStamp: new Date('2019-05-04T15:12:00').getTime()
      },
      {
        id: 313,
        episodeName: '#1288 - Jon Reep',
        length: 10120,
        timeStamp: new Date('2019-05-03T15:12:00').getTime()
      }
    ],
    latestPosts: [
      {
        id: 101,
        type: 'text-post',
        postContent:
          "I'm doing a Q&A next in my next episode! Which questions do you have? Can be absolutely anything. Hit me with your questions in the comments!",
        nbrOfLikes: 53,
        timePosted: new Date('2019-05-06T10:12:00').getTime(),
        liked: false,
        nbrOfComments: 32
      },
      {
        id: 102,
        type: 'poll-post',
        postContent:
          'I had a discussion with Mark the other day about who is the best UFC fighter but we disagreed so I thought I ask you guys what you think',
        pollQuestion: "Who's the best UFC fighter??",
        timePosted: new Date('2019-05-06T08:12:00').getTime()
      }
    ],
    rating: {
      totalRating: 4.8,
      nbrOfRatings: 5899,
      userRating: null
    },
    latestReviews: [
      {
        id: 99,
        type: 'review',
        author: 'Hans Hansson',
        authorImageUri:
          'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        rating: 5,
        postContent:
          "Revising my initial review. After a good deal of troubleshooting, I was able to get them to work. I've already discussed edits to the manual with customer service as well. I will give them credit, they were responsive and really tried to help me. For those who are buying, remember to take the protective tape off the earbuds or they won't connect to the case!",
        timePosted: new Date('2019-05-06T10:12:00').getTime()
      },
      {
        id: 98,
        type: 'review',
        author: 'John Johnsson',
        authorImageUri:
          'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        rating: 4,
        postContent:
          'These earbuds are great. They provide awesome sound, are easy to connect to, and are comfortable. I would recommend these over and over again.',
        timePosted: new Date('2019-05-06T08:12:00').getTime()
      }
    ]
  }
]
