import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR1, COLOR2 } from '../../styles/common'
import {
  Header, Row, Text, Icon
} from '../common'
import TextPost from './TextPost'
import PollPost from './PollPost'

class Post extends Component {
  renderPost = () => {
    const {
      type, previewMode, content, id, poll, pollOptionPressed, pollQuestion
    } = this.props
    switch (type) {
      case 'text-post':
        return <TextPost {...{ previewMode, content }} />
      case 'poll-post':
        return (
          <PollPost
            {...{
              id,
              poll,
              pollOptionPressed,
              previewMode,
              content,
              pollQuestion
            }}
          />
        )
      default:
        return null
    }
  }

  onCommentPress = () => {
    const { id, navigation, type } = this.props
    navigation.navigate('DetailView', { id, type })
  }

  onHeaderPress = () => {
    const { authorId, navigation } = this.props
    navigation.navigate('PodcastView', { authorId })
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
      timeStamp,
      authorImageUri,
      tag
    } = this.props
    const commentButton = feedPost ? (
      <TouchableOpacity style={styles.button} onPress={() => this.onCommentPress()}>
        <Icon name="chatboxes" color={COLOR1} size={25} />
        <Text style={styles.buttonText}>{nbrOfComments}</Text>
      </TouchableOpacity>
    ) : null
    return (
      <View>
        <Header
          {...{
            author,
            timeStamp,
            authorImageUri,
            tag,
            onPress: () => this.onHeaderPress()
          }}
        />
        <Row>{this.renderPost()}</Row>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => likeButtonPressed(id)}>
            <Icon
              name={liked ? 'heart' : 'heart-empty'}
              color={liked ? COLOR2 : COLOR1}
              size={25}
            />
            <Text style={styles.buttonText}>{nbrOfLikes}</Text>
          </TouchableOpacity>
          {commentButton}
          <TouchableOpacity style={styles.button} onPress={onSharePress}>
            <Icon name="share-alt" color={COLOR1} size={25} />
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
  content: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  feedPost: PropTypes.bool,
  poll: PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    userVoteId: PropTypes.number,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired
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
