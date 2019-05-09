import { PODCAST_RATE_STAR_PRESSED } from './types'

// eslint-disable-next-line import/prefer-default-export
export const podcastRateStarPressed = ({ id, rating }) => ({
  type: PODCAST_RATE_STAR_PRESSED,
  payload: { id, rating }
})
