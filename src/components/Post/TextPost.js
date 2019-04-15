import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Post from './Post'
import Text from '../common/Text'

const TextPost = (props) => {
  const { postContent, ...otherProps } = props
  return (
    <Post {...otherProps}>
      <Text style={styles.textSection}>{postContent}</Text>
    </Post>
  )
}

TextPost.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.number.isRequired,
  postContent: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  }
})

export default TextPost
