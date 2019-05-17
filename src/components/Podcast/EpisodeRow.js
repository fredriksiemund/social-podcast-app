import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import { Text, Icon } from '../common'
import { COLOR1, COLOR2 } from '../../styles/common'
import StarRating from '../Episode/StarRating'

const EpisodeRow = ({
  timeStamp,
  episodeName,
  episodeDescription,
  length,
  onPress,
  preview,
  totalRating
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.episodeRow}>
      <View style={{ flexShrink: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{timeStamp}</Text>
          <View style={{ marginLeft: 10 }}>
            {preview ? null : <StarRating rating={totalRating} color={COLOR2} size={15} />}
          </View>
        </View>
        <View style={styles.nameRow}>
          <Text style={styles.episodeName}>{episodeName}</Text>
          <Text style={{ fontSize: 13, marginBottom: 1 }}>{`  ${length}`}</Text>
        </View>
        {preview ? null : <Text numberOfLines={2}>{episodeDescription}</Text>}
      </View>
      <TouchableOpacity>
        <Icon name="play-circle" color={COLOR1} size={35} />
      </TouchableOpacity>
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
    flexShrink: 1,
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
