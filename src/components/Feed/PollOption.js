import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR1, COLOR2, BACKGROUND } from '../../styles/common'
import { Icon, Text } from '../common'

const PollOption = ({
  selected, progress, optionText, onPress, preview
}) => {
  const color = selected ? COLOR2 : COLOR1
  const progressStyle = { ...styles.progress, flex: progress, borderColor: color }
  const Container = preview ? View : TouchableOpacity
  return (
    <View>
      <Container style={styles.pollOption} onPress={onPress}>
        <Icon name={selected ? 'radio-button-on' : 'radio-button-off'} size={25} color={color} />
        <View style={styles.progressBar}>
          <View style={[progressStyle, { backgroundColor: selected ? COLOR2 : BACKGROUND }]} />
        </View>
      </Container>
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
    backgroundColor: COLOR2,
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
