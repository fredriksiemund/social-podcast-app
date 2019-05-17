import React from 'react'
import {
  View, TouchableWithoutFeedback, StyleSheet, Image
} from 'react-native'
import { Text } from '../common'

const GroupRow = ({ groupImageUri, name }) => (
  <TouchableWithoutFeedback>
    <View style={styles.groupRow}>
      <Image source={{ uri: groupImageUri }} style={styles.image} />
      <View style={styles.groupNameContainer}>
        <Text style={styles.groupName} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <Text style={styles.buttonText}>{'>'}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  groupRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 35,
    width: 35
  },
  groupNameContainer: {
    marginHorizontal: 7,
    flexShrink: 1
  },
  groupName: {
    fontSize: 18
  },
  buttonText: {
    fontWeight: '300',
    fontSize: 20
  }
})

export default GroupRow
