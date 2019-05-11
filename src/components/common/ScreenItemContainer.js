import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ScreenItemContainer = ({ style, children }) => (
  <View style={[styles.screenItemContainer, style]}>{children}</View>
)

const styles = StyleSheet.create({
  screenItemContainer: {
    paddingHorizontal: 15
  }
})

ScreenItemContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))])
}

ScreenItemContainer.defaultProps = {
  style: null
}

export default ScreenItemContainer
