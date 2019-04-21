import React from 'react'
import ScreenContainer from '../../components/common/ScreenContainer'
import Post from '../../components/Post/Post'
import CommentSection from '../../components/CommentSection'

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
  console.log(post)
  return (
    <ScreenContainer>
      <Post {...postProps} />
      <CommentSection {...post.comments} />
    </ScreenContainer>
  )
}

export default PostScreen
