import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { TERTIARY_COLOR } from '../../styles/common'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import ButtonRow from './ButtonRow'

const PodPost = ({
  episodeName, episodeDescription, previewMode, buttonRow, ...headerProps
}) => (
  <View>
    <PostHeader {...headerProps} tag="New episode" />
    <PostRow>
      <View style={styles.podContainer}>
        <Text style={styles.podTitle}>{episodeName}</Text>
        <Text style={styles.podDescription} {...(previewMode ? { numberOfLines: 1 } : {})}>
          {episodeDescription}
        </Text>
        <View style={styles.buttonRow}>
          <ButtonRow buttons={buttonRow} />
        </View>
      </View>
    </PostRow>
  </View>
)

PodPost.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  buttonRow: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      size: PropTypes.number,
      onPress: PropTypes.func
    })
  ).isRequired,
  previewMode: PropTypes.bool
}

PodPost.defaultProps = {
  previewMode: false
}

const styles = StyleSheet.create({
  podContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    borderWidth: 1,
    borderColor: TERTIARY_COLOR,
    borderRadius: 5
  },
  podHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  podTitle: {
    fontSize: 15,
    fontWeight: '700'
  },
  podDescription: {
    fontSize: 15
  },
  buttonRow: {
    paddingBottom: 5
  }
})

export default PodPost
