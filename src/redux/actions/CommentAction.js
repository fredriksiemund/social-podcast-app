import { COMMENT_SUBMITTED, COMMENT_LIKE_BUTTON_PRESSED } from './types'

export const commentSubmitted = ({
  itemId, author, authorImageUri, postContent
}) => ({
  type: COMMENT_SUBMITTED,
  payload: {
    itemId,
    author,
    authorImageUri,
    postContent
  }
})

export const commentLikeButtonPressed = (id, itemId) => ({
  type: COMMENT_LIKE_BUTTON_PRESSED,
  payload: { id, itemId }
})
