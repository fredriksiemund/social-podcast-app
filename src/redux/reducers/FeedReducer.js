import { LIKE_BUTTON_PRESSED, POLL_OPTION_PRESSED } from '../actions/types'
import feedData from '../../../assets/data/feedData'

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
        if (entry.id === action.payload.postId) {
          const newPoll = entry.poll.options.map((pollEntry) => {
            if (pollEntry.id === action.payload.optionId) {
              return {
                ...pollEntry,
                selected: !pollEntry.selected
              }
            }
            return pollEntry
          })
          return {
            ...entry,
            poll: { ...entry.poll, options: newPoll }
          }
        }
        return entry
      })
    default:
      return state
  }
}
