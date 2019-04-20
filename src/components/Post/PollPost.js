import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Text from '../common/Text'
import PostContainer from './PostContainer'
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
    const {
      id, poll, pollOptionPressed, preview
    } = this.props
    const total = poll.totalVotes
    const length = preview ? 2 : poll.options.length
    const jsx = []
    for (let i = 0; i < length; i += 1) {
      const option = poll.options[i]
      jsx.push(
        <PollOption
          key={option.id}
          selected={option.selected}
          progress={this.round(option.votes / total, 2)}
          optionText={`${option.option} (${option.votes} votes)`}
          onPress={() => pollOptionPressed({ postId: id, optionId: option.id })}
          preview={preview}
        />
      )
    }
    if (preview) {
      jsx.push(
        <Text key="previewButton" style={styles.previewButton}>
          {`${poll.options.length - 2} more...`}
        </Text>
      )
    }
    return jsx
  }

  render() {
    const {
      id,
      postContent,
      nbrOfLikes,
      nbrOfComments,
      liked,
      likeButtonPressed,
      pollQuestion,
      preview,
      ...headerProps
    } = this.props
    const buttonRow = [
      {
        name: liked ? 'ios-heart' : 'ios-heart-empty',
        color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
        text: nbrOfLikes,
        onPress: () => likeButtonPressed(id)
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
    const previewAttribute = preview ? { numberOfLines: 1 } : {}
    return (
      <PostContainer>
        <PostHeader {...headerProps} />
        <PostRow>
          <Text style={styles.textSection} {...previewAttribute}>
            {postContent}
          </Text>
        </PostRow>
        <PostRow>
          <View style={styles.pollContainer}>
            <Text style={styles.pollQuestion}>{pollQuestion}</Text>
            {this.renderPoll()}
          </View>
        </PostRow>
        <ButtonRow buttons={buttonRow} />
      </PostContainer>
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
  likeButtonPressed: PropTypes.func.isRequired,
  preview: PropTypes.bool
}

PollPost.defaultProps = {
  preview: false
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
  },
  previewButton: {
    fontSize: 15,
    fontWeight: '700',
    alignSelf: 'center',
    padding: 5
  }
})

export default PollPost
