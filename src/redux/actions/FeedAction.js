import { LIKE_BUTTON_PRESSED } from './types'

// eslint-disable-next-line import/prefer-default-export
export const postLiked = postId => ({
  type: LIKE_BUTTON_PRESSED,
  payload: postId
})
