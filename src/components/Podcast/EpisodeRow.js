import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text, Icon } from '../common'
import { COLOR1, COLOR3 } from '../../styles/common'

const EpisodeRow = ({ timeStamp, episodeName, length }) => (
  <View style={styles.previewRow}>
    <View>
      <Text>{timeStamp}</Text>
      <View style={styles.nameRow}>
        <Text style={styles.episodeName}>{episodeName}</Text>
        <Text style={{ fontSize: 13, marginBottom: 1 }}>{`  ${length}`}</Text>
      </View>
    </View>
    <TouchableOpacity>
      <Icon name="play-circle" color={COLOR1} size={35} />
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
    borderBottomWidth: 1,
    borderBottomColor: COLOR3
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  episodeName: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default EpisodeRow
