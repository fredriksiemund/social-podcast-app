import React from 'react'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'

const IconButton = ({
  iconName, iconSize, iconColor, style, onPress, children
}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name={iconName} color={iconColor} size={iconSize} />
    {children}
  </TouchableOpacity>
)

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.shape({}),
  children: PropTypes.element
}

IconButton.defaultProps = {
  style: {},
  children: undefined
}

export default IconButton
