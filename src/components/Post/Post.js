import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
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
    const { navigation, postPressed } = this.props
    postPressed(id)
    navigation.navigate('PostView')
  }

  onInfoPress = (id) => {
    const { navigation, postPressed } = this.props
    postPressed(id)
    navigation.navigate('PostView')
  }

  textAndPollPostButtonRow = () => {
    const {
      liked, comments, nbrOfLikes, id, likeButtonPressed, previewPost
    } = this.props
    const buttonRow = [
      {
        name: liked ? 'ios-heart' : 'ios-heart-empty',
        color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
        text: nbrOfLikes,
        onPress: () => likeButtonPressed(id)
      }
    ]
    if (previewPost) {
      buttonRow.push({
        name: 'ios-chatboxes',
        color: PRIMARY_COLOR,
        text: comments.nbrOfComments,
        onPress: () => this.onCommentPress(id)
      })
    }
    buttonRow.push({
      name: 'ios-share-alt',
      color: PRIMARY_COLOR
    })
    return buttonRow
  }

  podPostButtonRow = () => {
    const { id } = this.props
    return [
      {
        name: 'ios-play-circle',
        color: PRIMARY_COLOR,
        text: 'Play',
        size: 40
      },
      {
        name: 'ios-add-circle',
        color: PRIMARY_COLOR,
        text: 'Queue',
        size: 40
      },
      {
        name: 'ios-information-circle',
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
      likeButtonPressed,
      liked,
      previewPost,
      episodeName,
      episodeDescription,
      poll,
      pollQuestion,
      pollOptionPressed
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
              liked,
              likeButtonPressed,
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
              liked,
              likeButtonPressed,
              previewMode,
              buttonRow,
              poll,
              pollQuestion,
              pollOptionPressed
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
  timePosted: PropTypes.string.isRequired,
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
  pollOptionPressed: PropTypes.func.isRequired,
  episodeDescription: PropTypes.string,
  episodeName: PropTypes.string,
  previewPost: PropTypes.bool,
  postPressed: PropTypes.func,
  navigation: PropTypes.shape({})
}

Post.defaultProps = {
  previewPost: false,
  postPressed: null,
  navigation: null,
  postContent: null,
  comments: null,
  nbrOfLikes: null,
  likeButtonPressed: null,
  liked: null,
  poll: null,
  pollQuestion: null,
  episodeDescription: null,
  episodeName: null
}

export default Post
