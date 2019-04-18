import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Text from '../common/Text'

const PollOption = ({
  selected, progress, optionText, onPress
}) => (
  <View>
    <TouchableOpacity style={styles.pollOption} onPress={onPress}>
      <Icon
        name={selected ? 'ios-checkbox' : 'ios-square'}
        size={25}
        color={selected ? SECONDARY_COLOR : PRIMARY_COLOR}
      />
      <View style={styles.progressBar}>
        <View style={{ flex: progress, ...styles.progress }} />
      </View>
    </TouchableOpacity>
    <Text style={styles.optionText}>{optionText}</Text>
  </View>
)

// TODO: Add PropTypes

const styles = StyleSheet.create({
  pollOption: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 5
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    borderRadius: 5,
    height: 25,
    marginLeft: 10
  },
  progress: {
    flexDirection: 'row',
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    height: 25
  },
  optionText: {
    paddingLeft: 30,
    paddingTop: 2
  }
})

export default PollOption
