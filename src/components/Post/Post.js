import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Post = ({ children }) => <View style={styles.postContainer}>{children}</View>

Post.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10
  }
})

export default Post
