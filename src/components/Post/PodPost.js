import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import IconButton from '../common/IconButton'

const PodPost = (props) => {
  const { episodeName, episodeDescription, ...headerProps } = props
  return (
    <Post>
      <PostHeader {...headerProps} tag="New episode" />
      <PostRow>
        <View style={styles.podContainer}>
          <Text style={styles.podTitle}>{episodeName}</Text>
          <Text style={styles.podDescription}>{episodeDescription}</Text>
          <View style={styles.podButtons}>
            <IconButton
              style={styles.leftButton}
              iconName="ios-add-circle"
              iconSize={40}
              iconColor={PRIMARY_COLOR}
              onPress={() => {}}
            />
            <IconButton
              style={styles.centerButton}
              iconName="ios-play-circle"
              iconColor={PRIMARY_COLOR}
              iconSize={65}
              onPress={() => {}}
            />
            <IconButton
              style={styles.rightButton}
              iconName="ios-chatboxes"
              iconColor={PRIMARY_COLOR}
              iconSize={35}
              onPress={() => {}}
            />
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
