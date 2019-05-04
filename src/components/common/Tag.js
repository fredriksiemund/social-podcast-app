import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'
import { SECONDARY_COLOR, BACKGROUND } from '../../styles/common'

const Tag = ({ content }) => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>{content}</Text>
  </View>
)

Tag.propTypes = {
  content: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: SECONDARY_COLOR,
    padding: 3,
    borderRadius: 10,
    marginLeft: 5
  },
  tagText: {
    color: BACKGROUND,
    fontSize: 9
  }
})

export default Tag
