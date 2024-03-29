import { LIKE_BUTTON_PRESSED, POLL_OPTION_PRESSED } from './types'

export const likeButtonPressed = postId => ({
  type: LIKE_BUTTON_PRESSED,
  payload: postId
})

export const pollOptionPressed = ({ postId, optionId }) => ({
  type: POLL_OPTION_PRESSED,
  payload: { postId, optionId }
})
