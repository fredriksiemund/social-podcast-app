import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const PostContainer = ({ children }) => <View style={styles.postContainer}>{children}</View>

PostContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10
  }
})

export default PostContainer
