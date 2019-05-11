import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import { Text, Icon } from '../common'
import { COLOR1 } from '../../styles/common'

const EpisodeRow = ({
  timeStamp, episodeName, episodeDescription, length, onPress, preview
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>
      <View style={styles.episodeRow}>
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
      {preview ? null : <Text numberOfLines={3}>{episodeDescription}</Text>}
    </View>
  </TouchableWithoutFeedback>
)

EpisodeRow.propTypes = {
  preview: PropTypes.bool,
  episodeDescription: PropTypes.string
}

EpisodeRow.defaultProps = {
  preview: true,
  episodeDescription: null
}

const styles = StyleSheet.create({
  episodeRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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
