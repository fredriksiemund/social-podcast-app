import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../common/Text'
import Icon from '../common/Icon'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'

const EpisodeRow = ({ timeStamp, episodeName, length }) => (
  <View style={styles.previewRow}>
    <View>
      <Text>{timeStamp}</Text>
      <View style={styles.nameRow}>
        <Text style={styles.episodeName}>{episodeName}</Text>
        <Text style={{ fontSize: 13 }}>{` ${length}`}</Text>
      </View>
    </View>
    <TouchableOpacity>
      <Icon name="play-circle" color={PRIMARY_COLOR} size={35} />
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  previewRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderBottomColor: TERTIARY_COLOR
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  episodeName: {
    fontSize: 16,
    fontWeight: '700'
  }
})

export default EpisodeRow
