import {
  LIKE_BUTTON_PRESSED,
  POLL_OPTION_PRESSED,
  GO_TO_POST,
  COMMENT_SUBMITTED,
  COMMENT_LIKE_BUTTON_PRESSED,
  RATE_STAR_PRESSED
} from './types'

export const likeButtonPressed = (postId, parentPostId) => {
  if (parentPostId === undefined) {
    return {
      type: LIKE_BUTTON_PRESSED,
      payload: postId
    }
  }
  return {
    type: COMMENT_LIKE_BUTTON_PRESSED,
    payload: { postId, parentPostId }
  }
}

export const pollOptionPressed = ({ postId, optionId }) => ({
  type: POLL_OPTION_PRESSED,
  payload: { postId, optionId }
})

export const goToPost = postId => ({
  type: GO_TO_POST,
  payload: postId
})

export const commentSubmitted = ({
  postId, author, authorImageUri, postContent
}) => ({
  type: COMMENT_SUBMITTED,
  payload: {
    postId,
    author,
    authorImageUri,
    postContent
  }
})

export const rateStarPressed = ({ postId, rating }) => ({
  type: RATE_STAR_PRESSED,
  payload: { postId, rating }
})
