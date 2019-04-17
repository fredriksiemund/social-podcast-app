import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

const Post = ({ children }) => (
  <TouchableWithoutFeedback style={styles.postContainer}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
)

Post.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10
  }
})

export default Post
