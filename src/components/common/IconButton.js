import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from './Icon'
import Text from './Text'
import { PRIMARY_COLOR } from '../../styles/common'

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
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onPress: PropTypes.func,
  style: PropTypes.shape({})
}

IconButton.defaultProps = {
  iconSize: 25,
  iconColor: PRIMARY_COLOR,
  style: null,
  children: null,
  onPress: null
}

const styles = StyleSheet.create({
  buttonContent: {
    paddingLeft: 5,
    fontWeight: '700'
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default IconButton
