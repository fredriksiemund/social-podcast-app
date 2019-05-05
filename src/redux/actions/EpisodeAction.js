import { RATE_STAR_PRESSED } from './types'

// eslint-disable-next-line import/prefer-default-export
export const rateStarPressed = ({ postId, rating }) => ({
  type: RATE_STAR_PRESSED,
  payload: { postId, rating }
})
