import { COMMENT_SUBMITTED, COMMENT_LIKE_BUTTON_PRESSED } from '../actions/types'
import commentData from '../../../assets/data/commentData'

export default (state = commentData, action) => {
  switch (action.type) {
    case COMMENT_SUBMITTED:
      return state.map((entry) => {
        const {
          itemId, author, authorImageUri, postContent
        } = action.payload
        if (entry.itemId === itemId) {
          const newComments = entry.comments
          newComments.push({
            id: entry.comments.length + 1,
            author,
            authorImageUri,
            postContent,
            timeStamp: new Date().getTime(),
            nbrOfLikes: 0,
            liked: false
          })
          return {
            ...entry,
            nbrOfComments: entry.nbrOfComments + 1,
            comments: newComments
          }
        }
        return entry
      })
    case COMMENT_LIKE_BUTTON_PRESSED:
      return state.map((entry) => {
        if (entry.itemId === action.payload.itemId) {
          const newComments = entry.comments.map((comment) => {
            if (comment.id === action.payload.id) {
              let nbrOfNewLikes = comment.nbrOfLikes
              if (!comment.liked) nbrOfNewLikes += 1
              else nbrOfNewLikes -= 1
              return {
                ...comment,
                liked: !comment.liked,
                nbrOfLikes: nbrOfNewLikes
              }
            }
            return comment
          })
          return {
            ...entry,
            comments: newComments
          }
        }
        return entry
      })
    default:
      return state
  }
}
