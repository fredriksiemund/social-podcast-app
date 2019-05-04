import React from 'react'
import ScreenContainer from '../../components/common/ScreenContainer'
import DetailAndCommentsList from '../../components/DetailAndCommentsList'

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
      <DetailAndCommentsList
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
