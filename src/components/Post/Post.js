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

  getButtonRow = () => {
    const {
      liked, comments, nbrOfLikes, id, likeButtonPressed, previewPost
    } = this.props
    if (previewPost) {
      return [
        {
          name: liked ? 'ios-heart' : 'ios-heart-empty',
          color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
          text: nbrOfLikes,
          onPress: () => likeButtonPressed(id)
        },
        {
          name: 'ios-chatboxes',
          color: PRIMARY_COLOR,
          text: comments.nbrOfComments,
          onPress: () => this.onCommentPress(id)
        },
        {
          name: 'ios-share-alt',
          color: PRIMARY_COLOR
        }
      ]
    }
    return [
      {
        name: liked ? 'ios-heart' : 'ios-heart-empty',
        color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
        text: nbrOfLikes,
        onPress: () => likeButtonPressed(id)
      },
      {
        name: 'ios-share-alt',
        color: PRIMARY_COLOR
      }
    ]
  }

  renderPost = (postProps) => {
    const { previewMode } = this.state
    const { type, previewPost } = postProps
    const buttonRow = this.getButtonRow()
    let post
    switch (type) {
      case 'text-post':
        post = <TextPost {...postProps} previewMode={previewMode} buttonRow={buttonRow} />
        break
      case 'pod-post':
        post = <PodPost {...postProps} previewMode={previewMode} />
        break
      case 'poll-post':
        post = <PollPost {...postProps} previewMode={previewMode} buttonRow={buttonRow} />
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
