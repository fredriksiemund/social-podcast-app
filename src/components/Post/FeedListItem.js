import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import PostContainer from './PostContainer'
import Post from './Post'
import PodPost from './PodPost'

class FeedListItem extends Component {
  constructor(props) {
    super(props)
    this.state = { previewMode: true }
  }

  onPostPress = () => {
    const { previewMode } = this.state
    this.setState({ previewMode: !previewMode })
  }

  renderPost = () => {
    const { previewMode } = this.state
    const {
      id,
      type,
      author,
      authorImageUri,
      timePosted,
      episodeName,
      episodeDescription,
      goToPost,
      navigation
    } = this.props
    if (type === 'pod-post') {
      return (
        <PostContainer onPress={this.onPostPress} feedPost>
          <PodPost
            {...{
              author,
              authorImageUri,
              timePosted,
              episodeName,
              episodeDescription,
              previewMode,
              id,
              navigation,
              goToPost
            }}
          />
        </PostContainer>
      )
    }
    return (
      <PostContainer onPress={this.onPostPress}>
        <Post {...this.props} previewMode={previewMode} feedPost />
      </PostContainer>
    )
  }

  render() {
    return <View>{this.renderPost(this.props)}</View>
  }
}

FeedListItem.propTypes = {
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
  goToPost: PropTypes.func,
  navigation: PropTypes.shape({}),
  parentPostId: PropTypes.number
}

FeedListItem.defaultProps = {
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

export default FeedListItem
