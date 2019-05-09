import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR3 } from '../../styles/common'
import { Text, Row } from '../common'
import PollOption from './PollOption'

class PollPost extends Component {
  renderPoll() {
    const {
      id, poll, pollOptionPressed, previewMode
    } = this.props
    const total = poll.totalVotes
    const length = previewMode ? 2 : poll.options.length
    const pollList = []
    for (let i = 0; i < length; i += 1) {
      const option = poll.options[i]
      pollList.push(
        <PollOption
          key={option.id}
          selected={option.selected}
          progress={Math.round((option.votes / total) * 100) / 100}
          optionText={`${option.option} (${option.votes} votes)`}
          onPress={() => pollOptionPressed({ postId: id, optionId: option.id })}
          preview={previewMode}
        />
      )
    }
    if (previewMode) {
      pollList.push(
        <Text key="previewButton" style={styles.previewButton}>
          {`${poll.options.length - 2} more...`}
        </Text>
      )
    }
    return pollList
  }

  render() {
    const { content, pollQuestion, previewMode } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Row>
          <Text style={styles.textSection} numberOfLines={previewMode ? 1 : null}>
            {content}
          </Text>
        </Row>
        <Row>
          <View style={styles.pollContainer}>
            <Text style={styles.pollQuestion}>{pollQuestion}</Text>
            {this.renderPoll()}
          </View>
        </Row>
      </View>
    )
  }
}

PollPost.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
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
  pollQuestion: PropTypes.string.isRequired,
  pollOptionPressed: PropTypes.func.isRequired,
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
    borderColor: COLOR3,
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
