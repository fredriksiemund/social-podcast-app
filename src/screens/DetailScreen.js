import React from 'react'
import PropTypes from 'prop-types'
import ScreenContainer from '../components/common/ScreenContainer'
import DetailAndCommentsList from '../components/DetailAndCommentsList'

const DetailScreen = ({
  posts,
  comments,
  episodes,
  currentUser,
  selectedDetail,
  rateStarPressed,
  likeButtonPressed,
  pollOptionPressed,
  commentSubmitted,
  commentLikeButtonPressed
}) => {
  let item
  if (selectedDetail.type === 'episode') {
    item = episodes.find(x => x.id === selectedDetail.id)
  } else {
    item = posts.find(x => x.id === selectedDetail.id)
  }
  const commentList = comments.find(x => x.itemId === selectedDetail.id)
  return (
    <ScreenContainer>
      <DetailAndCommentsList
        {...{
          ...item,
          currentUser,
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
  selectedDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  pollOptionPressed: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired,
  commentLikeButtonPressed: PropTypes.func.isRequired
}

export default DetailScreen
