import React from 'react'
import ScreenContainer from '../../components/common/ScreenContainer'
import Post from '../../components/Post/Post'

const PostScreen = (props) => {
  const {
    selectedPost, feed, likeButtonPressed, pollOptionPressed
  } = props
  const post = feed.find(x => x.id === selectedPost)
  const postProps = {
    ...post,
    likeButtonPressed,
    pollOptionPressed
  }
  return (
    <ScreenContainer>
      <Post {...postProps} />
    </ScreenContainer>
  )
}

export default PostScreen
