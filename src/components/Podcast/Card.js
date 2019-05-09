import React, { Component } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR3, COLOR2 } from '../../styles/common'
import { Header, Text } from '../common'
import StarRating from '../Episode/StarRating'

class Card extends Component {
  renderStarRating = () => {
    const { type, rating } = this.props
    if (type === 'review') {
      return <StarRating rating={rating} color={COLOR2} />
    }
    return null
  }

  renderContent = () => {
    const { type, content, pollQuestion } = this.props
    if (type === 'review') {
      return (
        <View>
          <Text numberOfLines={4}>{content}</Text>
        </View>
      )
    }
    const question = (
      <Text style={styles.pollQuestion} numberOfLines={1}>
        {`${pollQuestion}`}
      </Text>
    )
    return (
      <View>
        <Text numberOfLines={type === 'poll-post' ? 2 : 4}>{content}</Text>
        {type === 'poll-post' ? question : null}
      </View>
    )
  }

  render() {
    const { author, timeStamp, authorImageUri } = this.props
    const { width } = Dimensions.get('window')

    return (
      <View style={[styles.cardContainer, { width: width - 45 }]}>
        <View>
          <View style={styles.cardHeader}>
            <Header author={author} timeStamp={timeStamp} authorImageUri={authorImageUri} small />
            <View style={{ marginLeft: 15 }}>{this.renderStarRating()}</View>
          </View>
          <View style={{ marginTop: 10 }}>{this.renderContent()}</View>
        </View>
      </View>
    )
  }
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  pollQuestion: PropTypes.string,
  rating: PropTypes.number
}

Card.defaultProps = {
  pollQuestion: null,
  rating: 0
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: COLOR3
  },
  cardHeader: {
    flexDirection: 'row'
  },
  pollQuestion: {
    fontSize: 15,
    marginTop: 4,
    textDecorationLine: 'underline'
  }
})

export default Card
