import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { SECONDARY_COLOR } from '../../styles/common'
import Text from '../common/Text'

const Section = ({ heading, onPress, children }) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.subHeading}>{heading}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.showAllText]}>{'Show all >'}</Text>
      </TouchableOpacity>
    </View>
    <View style={{ marginTop: 5 }}>{children}</View>
  </View>
)

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired
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
    color: SECONDARY_COLOR
  }
})

export default Section
