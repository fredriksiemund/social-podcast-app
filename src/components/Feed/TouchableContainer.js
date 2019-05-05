import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

const TouchableContainer = ({ children, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
)

TouchableContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onPress: PropTypes.func
}

TouchableContainer.defaultProps = {
  onPress: null
}

export default TouchableContainer
