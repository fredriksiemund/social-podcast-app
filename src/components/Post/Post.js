import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import TextPost from './TextPost'
import PollPost from './PollPost'
import Text from '../common/Text'
import Icon from '../common/Icon'

class Post extends Component {
  renderPost = () => {
    const {
      type, previewMode, postContent, id, poll, pollOptionPressed, pollQuestion
    } = this.props
    switch (type) {
      case 'text-post':
        return <TextPost {...{ previewMode, postContent }} />
      case 'poll-post':
        return (
          <PollPost
            {...{
              id,
              poll,
              pollOptionPressed,
              previewMode,
              postContent,
              pollQuestion
            }}
          />
        )
      default:
        return null
    }
  }

  onCommentPress = () => {
    const {
      id, navigation, detailSelected, type
    } = this.props
    detailSelected({ id, type })
    navigation.navigate('DetailView')
  }

  render() {
    const {
      id,
      liked,
      likeButtonPressed,
      onSharePress,
      nbrOfLikes,
      nbrOfComments,
      feedPost,
      author,
      timePosted,
      authorImageUri,
      tag
    } = this.props
    const commentButton = feedPost ? (
      <TouchableOpacity style={styles.button} onPress={() => this.onCommentPress()}>
        <Icon name="chatboxes" color={PRIMARY_COLOR} size={25} />
        <Text style={styles.buttonText}>{nbrOfComments}</Text>
      </TouchableOpacity>
    ) : null
    return (
      <View>
        <PostHeader
          {...{
            author,
            timePosted,
            authorImageUri,
            tag
          }}
        />
        <PostRow>{this.renderPost()}</PostRow>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => likeButtonPressed(id)}>
            <Icon
              name={liked ? 'heart' : 'heart-empty'}
              color={liked ? SECONDARY_COLOR : PRIMARY_COLOR}
              size={25}
            />
            <Text style={styles.buttonText}>{nbrOfLikes}</Text>
          </TouchableOpacity>
          {commentButton}
          <TouchableOpacity style={styles.button} onPress={onSharePress}>
            <Icon name="share-alt" color={PRIMARY_COLOR} size={25} />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  // comments: PropTypes.shape({
  //   nbrOfComments: PropTypes.number.isRequired,
  //   comments: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.number.isRequired,
  //       author: PropTypes.string.isRequired,
  //       authorImageUri: PropTypes.string.isRequired,
  //       timePosted: PropTypes.number.isRequired,
  //       postContent: PropTypes.string.isRequired,
  //       nbrOfLikes: PropTypes.number.isRequired,
  //       liked: PropTypes.bool.isRequired
  //     })
  //   ).isRequired
  // }).isRequired,
  feedPost: PropTypes.bool,
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
  previewMode: PropTypes.bool
}

Post.defaultProps = {
  previewMode: false,
  feedPost: false,
  poll: null,
  pollQuestion: null,
  pollOptionPressed: null
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    paddingLeft: 5,
    fontWeight: '700'
  }
})

export default Post
