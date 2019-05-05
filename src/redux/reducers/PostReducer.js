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
    default:
      return state
  }
}
