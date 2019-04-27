import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import PostContainer from './PostContainer'
import TextPost from './TextPost'
import PodPost from './PodPost'
import PollPost from './PollPost'
import Comment from '../Comment/Comment'

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

  onInfoPress = (id) => {
    const { navigation, goToPost } = this.props
    goToPost(id)
    navigation.navigate('PostView')
  }

  onCommentLikeButtonPress = (id, parentPostId) => {
    const { likeButtonPressed } = this.props
    likeButtonPressed(id, parentPostId)
  }

  textAndPollPostButtonRow = () => {
    const {
      liked, comments, nbrOfLikes, id, likeButtonPressed, previewPost
    } = this.props
    const buttonRow = [
      {
        name: liked ? 'heart' : 'heart-empty',
        color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
        text: nbrOfLikes,
        onPress: () => likeButtonPressed(id)
      }
    ]
    if (previewPost) {
      buttonRow.push({
        name: 'chatboxes',
        color: PRIMARY_COLOR,
        text: comments.nbrOfComments,
        onPress: () => this.onCommentPress(id)
      })
    }
    buttonRow.push({
      name: 'share-alt',
      color: PRIMARY_COLOR
    })
    return buttonRow
  }

  podPostButtonRow = () => {
    const { id } = this.props
    return [
      {
        name: 'play-circle',
        color: PRIMARY_COLOR,
        text: 'Play',
        size: 40
      },
      {
        name: 'add-circle',
        color: PRIMARY_COLOR,
        text: 'Queue',
        size: 40
      },
      {
        name: 'information-circle',
        color: PRIMARY_COLOR,
        text: 'More',
        size: 40,
        onPress: () => this.onInfoPress(id)
      }
    ]
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
      nbrOfLikes,
      previewPost,
      episodeName,
      episodeDescription,
      poll,
      pollQuestion,
      pollOptionPressed,
      parentPostId
    } = this.props
    let buttonRow
    let post
    switch (type) {
      case 'text-post':
        buttonRow = this.textAndPollPostButtonRow()
        post = (
          <TextPost
            {...{
              author,
              authorImageUri,
              timePosted,
              postContent,
              previewMode,
              buttonRow
            }}
          />
        )
        break
      case 'pod-post':
        buttonRow = this.podPostButtonRow()
        post = (
          <PodPost
            {...{
              author,
              authorImageUri,
              timePosted,
              episodeName,
              episodeDescription,
              previewMode,
              buttonRow,
              onInfoPress: () => this.onInfoPress(id)
            }}
          />
        )
        break
      case 'poll-post':
        buttonRow = this.textAndPollPostButtonRow()
        post = (
          <PollPost
            {...{
              id,
              author,
              authorImageUri,
              timePosted,
              postContent,
              previewMode,
              buttonRow,
              poll,
              pollQuestion,
              pollOptionPressed
            }}
          />
        )
        break
      case 'comment':
        post = (
          <Comment
            {...{
              author,
              authorImageUri,
              timePosted,
              postContent,
              liked,
              nbrOfLikes,
              onLikeButtonPress: () => this.onCommentLikeButtonPress(id, parentPostId)
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
