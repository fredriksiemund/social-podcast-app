import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import { PRIMARY_COLOR } from '../../styles/common'

const TextPost = (props) => {
  const {
    postContent, nbrOfLikes, nbrOfComments, ...otherProps
  } = props
  return (
    <Post>
      <PostHeader {...otherProps} />
      <PostRow>
        <Text style={styles.textSection}>{postContent}</Text>
      </PostRow>
      <PostRow style={styles.buttons}>
        <View style={styles.postButton}>
          <Icon name="ios-heart-empty" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.postButtonNumber}>{nbrOfLikes}</Text>
        </View>
        <View style={styles.postButton}>
          <Icon name="ios-chatboxes" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.postButtonNumber}>{nbrOfComments}</Text>
        </View>
        <View style={styles.postButton}>
          <Icon name="ios-share-alt" color={PRIMARY_COLOR} size={25} />
        </View>
      </PostRow>
    </Post>
  )
}

TextPost.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  },
  postButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  postButtonNumber: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: '700'
  },
  buttons: {
    paddingHorizontal: 15
  }
})

export default TextPost
