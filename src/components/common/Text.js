import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR } from '../../styles/common'

const AppText = ({ style, children, numberOfLines }) => (
  <Text style={[styles.textStyle, style]} numberOfLines={numberOfLines}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  textStyle: {
    color: PRIMARY_COLOR,
    fontSize: 15
  }
})

AppText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.shape({}),
  numberOfLines: PropTypes.number
}

AppText.defaultProps = {
  style: {},
  numberOfLines: undefined,
  children: undefined
}

export default AppText
