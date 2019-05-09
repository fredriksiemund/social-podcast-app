export default [
  {
    id: 100,
    type: 'poll-post',
    author: 'Oprah’s SuperSoul Conversations',
    authorId: 704,
    authorImageUri: 'http://imglogo.podbean.com/dir-logo/361887/361887_300x300.jpeg',
    content: 'What do you want me to talk about on the next episode?',
    pollQuestion: 'What should i talk about on the next episode?',
    poll: {
      totalVotes: 665,
      options: [
        {
          id: 0,
          option: 'Meditation',
          votes: 487,
          selected: false
        },
        {
          id: 1,
          option: 'Spirituality',
          votes: 103,
          selected: false
        },
        {
          id: 2,
          option: 'Health',
          votes: 55,
          selected: false
        },
        {
          id: 3,
          option: 'Food',
          votes: 20,
          selected: false
        }
      ]
    },
    nbrOfLikes: 902,
    timeStamp: new Date('2019-04-27T16:24:00').getTime(),
    liked: false,
    nbrOfComments: 102
  },
  {
    id: 101,
    type: 'text-post',
    author: 'The Joe Rogan Experience',
    authorId: 705,
    authorImageUri:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/The_Joe_Rogan_Experience_logo.jpg/220px-The_Joe_Rogan_Experience_logo.jpg',
    content:
      "I'm doing a Q&A next in my next episode! Which questions do you have? Can be absolutely anything. Hit me with your questions in the comments!",
    nbrOfLikes: 53,
    timeStamp: new Date('2019-04-27T15:12:00').getTime(),
    liked: false,
    nbrOfComments: 32
  },
  {
    id: 102,
    type: 'poll-post',
    author: 'TED Talks',
    authorId: 706,
    authorImageUri: 'https://pl.tedcdn.com/rss_feed_images/ted_talks_main_podcast/audio.png',
    content: 'We are constantly on the move! Should we visit your home town next?',
    pollQuestion: 'Where should our next event be?',
    timeStamp: new Date('2019-04-27T06:24:00').getTime(),
    nbrOfLikes: 294,
    liked: false,
    poll: {
      totalVotes: 9593,
      options: [
        {
          id: 0,
          option: 'London',
          votes: 2653,
          selected: false
        },
        {
          id: 1,
          option: 'New York',
          votes: 2042,
          selected: false
        },
        {
          id: 2,
          option: 'Copenhagen',
          votes: 4530,
          selected: false
        }
      ]
    },
    nbrOfComments: 102
  },
  {
    id: 103,
    type: 'text-post',
    author: 'Views podcast',
    authorId: 706,
    authorImageUri:
      'https://content.production.cdn.art19.com/images/c0/b4/fa/08/c0b4fa08-1788-45bc-9c85-36a64f9658a0/1ea263069b2cd2746b55460ac6ee2d25d3f4c9aecbc1e651439fb050d102b8bb4c82ee123f9d04286c43ac5cd18dabf5514405aedfbc5a7ac28612e65f379c76.jpeg',
    content:
      'We are do exited to tell you guys that from now on we will be posting twice a week! Jason might not like It but he needs the money haha.',
    nbrOfLikes: 549,
    timeStamp: new Date('2019-04-26T23:24:00').getTime(),
    liked: false,
    nbrOfComments: 211
  },
  {
    id: 104,
    type: 'text-post',
    author: 'StarTalk Radio',
    authorId: 707,
    authorImageUri: 'https://i1.sndcdn.com/avatars-000100403534-873grd-t500x500.jpg',
    content:
      "Did you guys see the Blackhole picture!? We're definitely making a special episode on Friday dedicated to it.",
    nbrOfLikes: 213,
    timeStamp: new Date('2019-04-23T16:24:00').getTime(),
    liked: false,
    nbrOfComments: 102
  },
  {
    id: 105,
    type: 'text-post',
    author: 'Stuff You Should Know',
    authorId: 708,
    authorImageUri:
      'http://www.astortheatreperth.com/wp-content/uploads/2018/04/SYSK-AT-600x600-EDM-NoDate.jpg',
    content:
      'Just wishing you all a happy Chinese New Year! Did you know that during the Chinese New Year production closes for a month? ',
    nbrOfLikes: 34,
    timeStamp: new Date('2019-04-18T18:24:00').getTime(),
    liked: false,
    nbrOfComments: 102
  }
]
