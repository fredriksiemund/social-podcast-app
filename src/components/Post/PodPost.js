import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Text from '../common/Text'

const PodPost = (props) => {
  const { episodeName, episodeDescription, ...otherProps } = props
  return (
    <Post>
      <PostHeader {...otherProps} tag="New episode" />
      <PostRow>
        <View style={styles.podContainer}>
          <Text style={styles.podTitle}>{episodeName}</Text>
          <Text style={styles.podDescription}>{episodeDescription}</Text>
          <View style={styles.podButtons}>
            <View style={styles.leftButton}>
              <Icon name="ios-add-circle" color={PRIMARY_COLOR} size={40} />
            </View>
            <View style={styles.centerButton}>
              <Icon name="ios-play-circle" color={PRIMARY_COLOR} size={65} />
            </View>
            <View style={styles.rightButton}>
              <Icon name="ios-chatboxes" color={PRIMARY_COLOR} size={35} />
            </View>
          </View>
        </View>
      </PostRow>
    </Post>
  )
}

PodPost.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.string.isRequired,
  episodeName: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  podContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    borderRadius: 5
  },
  podHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  podTitle: {
    fontSize: 16,
    fontWeight: '700'
  },
  podDescription: {
    fontSize: 15
  },
  podButtons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftButton: {
    flex: 1,
    alignItems: 'flex-end'
  },
  centerButton: {
    flex: 1,
    alignItems: 'center'
  },
  rightButton: {
    flex: 1,
    alignItems: 'flex-start'
  }
})

export default PodPost
