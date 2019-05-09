import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR2 } from '../../styles/common'
import { Text } from '../common'

const Section = ({ heading, onPress, children }) => {
  const button = (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.showAllText]}>{'Show all >'}</Text>
    </TouchableOpacity>
  )
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.subHeading}>{heading}</Text>
        {onPress ? button : null}
      </View>
      <View style={{ marginTop: 5 }}>{children}</View>
    </View>
  )
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
}

Section.defaultProps = {
  onPress: null
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subHeading: {
    fontSize: 23,
    fontWeight: '300'
  },
  showAllText: {
    fontWeight: '700',
    fontSize: 17,
    color: COLOR2
  }
})

export default Section
