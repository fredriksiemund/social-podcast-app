import React from 'react'
import PropTypes from 'prop-types'
import { ScreenContainer } from '../components/common'
import DetailAndCommentsList from '../components/DetailAndCommentsList'

const DetailScreen = ({
  posts,
  comments,
  episodes,
  navigation,
  currentUser,
  detailSelected,
  rateStarPressed,
  likeButtonPressed,
  pollOptionPressed,
  commentSubmitted,
  commentLikeButtonPressed
}) => {
  const { id, type } = navigation.state.params
  let item
  if (type === 'episode') {
    item = episodes.find(x => x.id === id)
  } else {
    item = posts.find(x => x.id === id)
  }
  const commentList = comments.find(x => x.itemId === id)
  return (
    <ScreenContainer>
      <DetailAndCommentsList
        {...{
          ...item,
          navigation,
          currentUser,
          detailSelected,
          likeButtonPressed,
          pollOptionPressed,
          commentSubmitted,
          rateStarPressed,
          commentLikeButtonPressed,
          comments: {
            nbrOfComments: commentList.nbrOfComments,
            comments: commentList.comments
          }
        }}
      />
    </ScreenContainer>
  )
}

DetailScreen.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  pollOptionPressed: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired,
  commentLikeButtonPressed: PropTypes.func.isRequired
}

export default DetailScreen
