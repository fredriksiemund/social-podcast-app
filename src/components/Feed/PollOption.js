import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND } from '../../styles/common'
import Icon from '../common/Icon'
import Text from '../common/Text'

const PollOption = ({
  selected, progress, optionText, onPress, preview
}) => {
  const color = selected ? SECONDARY_COLOR : PRIMARY_COLOR
  const progressStyle = { ...styles.progress, flex: progress, borderColor: color }
  const Tag = preview ? View : TouchableOpacity
  return (
    <View>
      <Tag style={styles.pollOption} onPress={onPress}>
        <Icon name={selected ? 'radio-button-on' : 'radio-button-off'} size={25} color={color} />
        <View style={styles.progressBar}>
          <View
            style={[progressStyle, { backgroundColor: selected ? SECONDARY_COLOR : BACKGROUND }]}
          />
        </View>
      </Tag>
      <Text style={styles.optionText}>{optionText}</Text>
    </View>
  )
}

PollOption.propTypes = {
  selected: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  optionText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  preview: PropTypes.bool
}

PollOption.defaultProps = {
  preview: false
}

const styles = StyleSheet.create({
  pollOption: {
    flexDirection: 'row',
    paddingTop: 5
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    height: 25,
    marginLeft: 10
  },
  progress: {
    flexDirection: 'row',
    backgroundColor: SECONDARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    height: 25
  },
  optionText: {
    paddingLeft: 30,
    paddingTop: 2,
    fontSize: 13
  }
})

export default PollOption
