import React from 'react'
import PropTypes from 'prop-types'
import ScreenContainer from '../../components/common/ScreenContainer'
import PostAndCommentsList from '../../components/PostAndCommentsList'

const PostScreen = ({
  selectedPost,
  feed,
  likeButtonPressed,
  pollOptionPressed,
  currentUser,
  commentSubmitted
}) => {
  const post = feed.find(x => x.id === selectedPost)
  return (
    <ScreenContainer>
      <PostAndCommentsList
        {...{
          ...post,
          likeButtonPressed,
          pollOptionPressed,
          commentSubmitted,
          currentUser
        }}
      />
    </ScreenContainer>
  )
}

PostScreen.propTypes = {
  feed: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedPost: PropTypes.number.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  pollOptionPressed: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired
}

export default PostScreen
