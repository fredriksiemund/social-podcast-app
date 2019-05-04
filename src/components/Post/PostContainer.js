import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

const PostContainer = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
)

PostContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onPress: PropTypes.func
}

PostContainer.defaultProps = {
  onPress: null
}

export default PostContainer
