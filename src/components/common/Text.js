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
    fontSize: 14
  }
})

AppText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]))
  ]),
  style: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
  numberOfLines: PropTypes.number
}

AppText.defaultProps = {
  style: null,
  numberOfLines: null,
  children: null
}

export default AppText
