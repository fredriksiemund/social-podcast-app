import { COMMENT_SUBMITTED, COMMENT_LIKE_BUTTON_PRESSED } from './types'

export const commentSubmitted = ({
  itemId, author, authorImageUri, content
}) => ({
  type: COMMENT_SUBMITTED,
  payload: {
    itemId,
    author,
    authorImageUri,
    content
  }
})

export const commentLikeButtonPressed = (id, itemId) => ({
  type: COMMENT_LIKE_BUTTON_PRESSED,
  payload: { id, itemId }
})
