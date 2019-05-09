import { RATE_STAR_PRESSED } from '../actions/types'
import episodeData from '../../../assets/data/episodeData'

export default (state = episodeData, action) => {
  switch (action.type) {
    case RATE_STAR_PRESSED:
      return state.map((entry) => {
        if (entry.id === action.payload.id) {
          const { rating } = entry
          const { nbrOfRatings, totalRating, userRating } = rating
          let newNbrOfRating
          let total
          if (userRating) {
            newNbrOfRating = nbrOfRatings
            total = totalRating * nbrOfRatings - userRating + action.payload.rating
            total /= newNbrOfRating
          } else {
            newNbrOfRating = nbrOfRatings + 1
            total = totalRating * nbrOfRatings + action.payload.rating
            total /= newNbrOfRating
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
