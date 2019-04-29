import React from 'react'
import ScreenContainer from '../../components/common/ScreenContainer'
import PodAndCommentsList from '../../components/PodAndCommentsList'

const PodDetailScreen = ({
  selectedPost,
  feed,
  currentUser,
  rateStarPressed,
  commentSubmitted,
  likeButtonPressed
}) => {
  const post = feed.find(x => x.id === selectedPost)
  return (
    <ScreenContainer>
      <PodAndCommentsList
        {...{
          ...post,
          currentUser,
          commentSubmitted,
          rateStarPressed,
          likeButtonPressed
        }}
      />
    </ScreenContainer>
  )
}

export default PodDetailScreen
