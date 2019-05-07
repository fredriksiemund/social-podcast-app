import React, { Component } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { TERTIARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import Header from '../common/Header'
import Text from '../common/Text'
import StarRating from '../Episode/StarRating'

class Card extends Component {
  renderStarRating = () => {
    const { type, rating } = this.props
    if (type === 'review') {
      return <StarRating rating={rating} color={SECONDARY_COLOR} />
    }
    return null
  }

  renderContent = () => {
    const { type, postContent, pollQuestion } = this.props
    if (type === 'review') {
      return (
        <View>
          <Text numberOfLines={4}>{postContent}</Text>
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
        <Text numberOfLines={type === 'poll-post' ? 2 : 4}>{postContent}</Text>
        {type === 'poll-post' ? question : null}
      </View>
    )
  }

  render() {
    const { author, timePosted, authorImageUri } = this.props
    const { width } = Dimensions.get('window')

    return (
      <View style={[styles.cardContainer, { width: width - 45 }]}>
        <View>
          <View style={styles.cardHeader}>
            <Header author={author} timePosted={timePosted} authorImageUri={authorImageUri} small />
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
  timePosted: PropTypes.number.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
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
    backgroundColor: TERTIARY_COLOR
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
