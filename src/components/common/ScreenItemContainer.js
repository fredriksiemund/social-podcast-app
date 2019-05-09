import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const ScreenItemContainer = ({ children }) => (
  <View style={styles.screenItemContainer}>{children}</View>
)

const styles = StyleSheet.create({
  screenItemContainer: {
    paddingHorizontal: 15
  }
})

ScreenItemContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
}

export default ScreenItemContainer
