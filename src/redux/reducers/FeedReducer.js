import {
  LIKE_BUTTON_PRESSED,
  POLL_OPTION_PRESSED,
  COMMENT_SUBMITTED,
  COMMENT_LIKE_BUTTON_PRESSED,
  RATE_STAR_PRESSED
} from '../actions/types'
import feedData from '../../../assets/data/feedData2'

export default (state = feedData, action) => {
  switch (action.type) {
    case LIKE_BUTTON_PRESSED:
      return state.map((entry) => {
        if (entry.id === action.payload) {
          let nbrOfNewLikes = entry.nbrOfLikes
          if (!entry.liked) nbrOfNewLikes += 1
          else nbrOfNewLikes -= 1
          return {
            ...entry,
            liked: !entry.liked,
            nbrOfLikes: nbrOfNewLikes
          }
        }
        return entry
      })
    case POLL_OPTION_PRESSED:
      return state.map((entry) => {
        let changeValue
        if (entry.id === action.payload.postId) {
          const newPoll = entry.poll.options.map((pollEntry) => {
            if (pollEntry.id === action.payload.optionId) {
              if (pollEntry.selected) changeValue = -1
              else changeValue = 1
              return {
                ...pollEntry,
                votes: pollEntry.votes + changeValue,
                selected: !pollEntry.selected
              }
            }
            return pollEntry
          })
          return {
            ...entry,
            poll: { totalVotes: entry.poll.totalVotes + changeValue, options: newPoll }
          }
        }
        return entry
      })
    case COMMENT_SUBMITTED:
      return state.map((entry) => {
        const {
          postId, author, authorImageUri, postContent
        } = action.payload
        if (entry.id === postId) {
          const newComments = entry.comments.comments
          newComments.push({
            id: entry.comments.comments.length + 1,
            author,
            authorImageUri,
            postContent,
            timePosted: new Date().getTime(),
            nbrOfLikes: 0,
            liked: false
          })
          return {
            ...entry,
            comments: {
              nbrOfComments: entry.comments.nbrOfComments + 1,
              comments: newComments
            }
          }
        }
        return entry
      })
    case COMMENT_LIKE_BUTTON_PRESSED:
      return state.map((entry) => {
        if (entry.id === action.payload.parentPostId) {
          const newComments = entry.comments.comments.map((comment) => {
            if (comment.id === action.payload.postId) {
              let nbrOfNewLikes = comment.nbrOfLikes
              if (!comment.liked) nbrOfNewLikes += 1
              else nbrOfNewLikes -= 1
              return {
                ...comment,
                liked: !comment.liked,
                nbrOfLikes: nbrOfNewLikes
              }
            }
            return comment
          })
          return {
            ...entry,
            comments: {
              ...entry.comments,
              comments: newComments
            }
          }
        }
        return entry
      })
    case RATE_STAR_PRESSED:
      return state.map((entry) => {
        if (entry.id === action.payload.postId) {
          const { rating } = entry
          const { nbrOfRatings, totalRating, userRating } = rating
          let newNbrOfRating
          let total
          if (userRating) {
            newNbrOfRating = nbrOfRatings
            total = (totalRating * nbrOfRatings + action.payload.rating) / newNbrOfRating
          } else {
            newNbrOfRating = nbrOfRatings + 1
            total = (totalRating * nbrOfRatings + action.payload.rating) / newNbrOfRating
          }
          const newTotalRating = Math.round(total * 10) / 10
          return {
            ...entry,
            rating: {
              totalRating: newTotalRating,
              nbrOfRatings: newNbrOfRating,
              userRating: action.payload.rating
            }
          }
        }
        return entry
      })
    default:
      return state
  }
}
