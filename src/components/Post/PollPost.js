import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Text from '../common/Text'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import ButtonRow from './ButtonRow'
import PollOption from './PollOption'

class PollPost extends Component {
  round = (value, precision) => {
    const multiplier = 10 ** (precision || 0)
    return Math.round(value * multiplier) / multiplier
  }

  renderPoll() {
    const { id, poll, pollOptionPressed } = this.props
    const total = poll.totalVotes
    return poll.options.map(option => (
      <PollOption
        key={option.id}
        selected={option.selected}
        progress={this.round(option.votes / total, 2)}
        optionText={`${option.option} (${option.votes} votes)`}
        onPress={() => pollOptionPressed({ postId: id, optionId: option.id })}
      />
    ))
  }

  render() {
    const {
      id,
      postContent,
      nbrOfLikes,
      nbrOfComments,
      liked,
      likeButtonPress,
      ...headerProps
    } = this.props
    const buttonRow = [
      {
        name: liked ? 'ios-heart' : 'ios-heart-empty',
        color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
        text: nbrOfLikes,
        onPress: () => likeButtonPress(id)
      },
      {
        name: 'ios-chatboxes',
        color: PRIMARY_COLOR,
        text: nbrOfComments
      },
      {
        name: 'ios-share-alt',
        color: PRIMARY_COLOR
      }
    ]
    return (
      <Post>
        <PostHeader {...headerProps} />
        <PostRow>
          <Text style={styles.textSection} numberOfLines={1}>
            {postContent}
          </Text>
        </PostRow>
        <PostRow>
          <View style={styles.pollContainer}>
            <Text style={styles.pollQuestion}>What should i talk about on the next episode?</Text>
            <View style={styles.pollOptions}>{this.renderPoll()}</View>
          </View>
        </PostRow>
        <ButtonRow buttons={buttonRow} />
      </Post>
    )
  }
}

PollPost.propTypes = {
  id: PropTypes.number.isRequired,
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired,
  likeButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  },
  pollContainer: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    borderRadius: 5
  },
  pollQuestion: {
    fontSize: 15,
    fontWeight: '700'
  }
})

export default PollPost
