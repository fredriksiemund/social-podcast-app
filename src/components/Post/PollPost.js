import React, { Component } from 'react'
import { View, StyleSheet, LayoutAnimation } from 'react-native'
import PropTypes from 'prop-types'
import { TERTIARY_COLOR } from '../../styles/common'
import Text from '../common/Text'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import ButtonRow from './ButtonRow'
import PollOption from './PollOption'

class PollPost extends Component {
  componentWillUpdate = () => {
    LayoutAnimation.configureNext(LayoutAnimation.create(30, 'linear', 'opacity'))
  }

  round = (value, precision) => {
    const multiplier = 10 ** (precision || 0)
    return Math.round(value * multiplier) / multiplier
  }

  renderPoll() {
    const {
      id, poll, pollOptionPressed, previewMode
    } = this.props
    const total = poll.totalVotes
    const length = previewMode ? 2 : poll.options.length
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
          preview={previewMode}
        />
      )
    }
    if (previewMode) {
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
      postContent, pollQuestion, previewMode, buttonRow, ...headerProps
    } = this.props
    return (
      <View>
        <PostHeader {...headerProps} />
        <PostRow>
          <Text style={styles.textSection} {...(previewMode ? { numberOfLines: 1 } : {})}>
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
      </View>
    )
  }
}

PollPost.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired,
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
  }).isRequired,
  buttonRow: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      onPress: PropTypes.func
    })
  ).isRequired,
  pollQuestion: PropTypes.string.isRequired,
  previewMode: PropTypes.bool
}

PollPost.defaultProps = {
  previewMode: false
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
