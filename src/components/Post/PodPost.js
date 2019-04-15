import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Post from './Post'
import Text from '../common/Text'

const PodPost = (props) => {
  const { episodeName, episodeDescription, ...otherProps } = props
  return (
    <Post {...otherProps} tag="New episode">
      <View style={styles.podContainer}>
        <Text style={styles.podTitle}>{episodeName}</Text>
        <Text style={styles.podDescription}>{episodeDescription}</Text>
        <View style={styles.podButtons}>
          <Icon name="ios-contact" color={PRIMARY_COLOR} size={40} />
          <Icon name="ios-play-circle" color={PRIMARY_COLOR} size={65} style={styles.playButton} />
          <Icon name="ios-add-circle" color={PRIMARY_COLOR} size={40} />
        </View>
      </View>
    </Post>
  )
}

PodPost.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  podTitle: {
    fontSize: 16,
    fontWeight: '700'
  },
  podDescription: {
    fontSize: 15
  },
  podHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  podButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playButton: {
    paddingHorizontal: 30
  },
  podContainer: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    borderRadius: 5
  }
})

export default PodPost
