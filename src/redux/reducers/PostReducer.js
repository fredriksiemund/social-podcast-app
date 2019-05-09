import { LIKE_BUTTON_PRESSED, POLL_OPTION_PRESSED } from '../actions/types'
import postData from '../../../assets/data/postData'

export default (state = postData, action) => {
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
        if (entry.id === action.payload.postId) {
          if (action.payload.optionId === entry.poll.userVoteId) return entry
          let totalChange = 1
          if (entry.poll.userVoteId) totalChange = 0
          const newPoll = entry.poll.options.map((pollEntry) => {
            let localChange = 0
            if (pollEntry.id === action.payload.optionId) localChange = 1
            if (pollEntry.id === entry.poll.userVoteId) localChange = -1
            return {
              ...pollEntry,
              votes: pollEntry.votes + localChange
            }
          })
          return {
            ...entry,
            poll: {
              totalVotes: entry.poll.totalVotes + totalChange,
              userVoteId: action.payload.optionId,
              options: newPoll
            }
          }
        }
        return entry
      })
    default:
      return state
  }
}
