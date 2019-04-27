import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

const PostContainer = ({ children, previewPost, onPress }) => {
  if (previewPost) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    )
  }
  return <View>{children}</View>
}

PostContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  previewPost: PropTypes.bool,
  onPress: PropTypes.func
}

PostContainer.defaultProps = {
  previewPost: false,
  onPress: null
}

export default PostContainer
