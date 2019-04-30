import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PostContainer from './PostContainer'
import TextPost from './TextPost'
import PodPost from './PodPost'
import PollPost from './PollPost'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = { previewMode: false }
  }

  componentWillMount = () => {
    const { previewPost } = this.props
    this.setState({ previewMode: previewPost })
  }

  onPostPress = () => {
    const { previewMode } = this.state
    this.setState({ previewMode: !previewMode })
  }

  onCommentPress = (id) => {
    const { navigation, goToPost } = this.props
    goToPost(id)
    navigation.navigate('PostView')
  }

  onMorePress = (id) => {
    const { navigation, goToPost } = this.props
    goToPost(id)
    navigation.navigate('PodDetailView')
  }

  onCommentLikeButtonPress = (id, parentPostId) => {
    const { likeButtonPressed } = this.props
    likeButtonPressed(id, parentPostId)
  }

  renderPost = () => {
    const { previewMode } = this.state
    const {
      id,
      type,
      author,
      authorImageUri,
      timePosted,
      postContent,
      liked,
      likeButtonPressed,
      nbrOfLikes,
      previewPost,
      episodeName,
      episodeDescription,
      comments,
      poll,
      pollQuestion,
      pollOptionPressed
    } = this.props
    let post
    switch (type) {
      case 'text-post':
        post = (
          <TextPost
            {...{
              author,
              authorImageUri,
              timePosted,
              postContent,
              previewMode,
              liked,
              likeButtonPressed,
              nbrOfLikes,
              previewPost,
              nbrOfComments: comments.nbrOfComments,
              onLikePress: () => likeButtonPressed(id),
              onCommentPress: () => this.onCommentPress(id),
              onSharePress: () => {}
            }}
          />
        )
        break
      case 'pod-post':
        post = (
          <PodPost
            {...{
              author,
              authorImageUri,
              timePosted,
              episodeName,
              episodeDescription,
              previewMode,
              onMorePress: () => this.onMorePress(id),
              onPlayPress: () => {},
              onQueuePress: () => {}
            }}
          />
        )
        break
      case 'poll-post':
        post = (
          <PollPost
            {...{
              id,
              author,
              authorImageUri,
              timePosted,
              postContent,
              previewMode,
              poll,
              pollQuestion,
              pollOptionPressed,
              liked,
              likeButtonPressed,
              nbrOfLikes,
              previewPost,
              nbrOfComments: comments.nbrOfComments,
              onLikePress: () => likeButtonPressed(id),
              onCommentPress: () => this.onCommentPress(id),
              onSharePress: () => {}
            }}
          />
        )
        break
      default:
        break
    }
    return (
      <PostContainer previewPost={previewPost} onPress={this.onPostPress}>
        {post}
      </PostContainer>
    )
  }

  render() {
    return <View>{this.renderPost(this.props)}</View>
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  postContent: PropTypes.string,
  comments: PropTypes.shape({
    nbrOfComments: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  nbrOfLikes: PropTypes.number,
  likeButtonPressed: PropTypes.func,
  liked: PropTypes.bool,
  poll: PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired
      })
    ).isRequired
  }),
  pollQuestion: PropTypes.string,
  pollOptionPressed: PropTypes.func,
  episodeDescription: PropTypes.string,
  episodeName: PropTypes.string,
  previewPost: PropTypes.bool,
  goToPost: PropTypes.func,
  navigation: PropTypes.shape({}),
  parentPostId: PropTypes.number
}

Post.defaultProps = {
  previewPost: false,
  goToPost: null,
  navigation: null,
  postContent: null,
  comments: null,
  nbrOfLikes: null,
  likeButtonPressed: null,
  liked: null,
  poll: null,
  pollQuestion: null,
  episodeDescription: null,
  episodeName: null,
  pollOptionPressed: null,
  parentPostId: null
}

export default Post
