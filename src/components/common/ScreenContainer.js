import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { BACKGROUND } from '../../styles/common'

const ScreenContainer = ({ children }) => <View style={styles.screenContainer}>{children}</View>

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingHorizontal: 10
  }
})

ScreenContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
}

export default ScreenContainer
