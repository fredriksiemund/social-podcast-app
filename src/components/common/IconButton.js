import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import Text from './Text'

const IconButton = ({
  iconName, iconSize, iconColor, style, onPress, children
}) => (
  <TouchableOpacity style={[styles.iconButton, style]} onPress={onPress}>
    <Icon name={iconName} color={iconColor} size={iconSize} />
    {children ? <Text style={styles.buttonContent}>{children}</Text> : null}
  </TouchableOpacity>
)

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
  iconColor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  style: PropTypes.shape({})
}

IconButton.defaultProps = {
  style: null,
  children: null,
  onPress: null
}

const styles = StyleSheet.create({
  buttonContent: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: '700'
  },
  iconButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IconButton
