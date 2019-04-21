import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import IconButton from '../common/IconButton'

class PodPost extends Component {
  onInfoPress = () => {
    const { id, navigation, postPressed } = this.props
    postPressed(id)
    navigation.navigate('PostView')
  }

  render() {
    const {
      episodeName, episodeDescription, previewMode, ...headerProps
    } = this.props
    return (
      <View>
        <PostHeader {...headerProps} tag="New episode" />
        <PostRow>
          <View style={styles.podContainer}>
            <Text style={styles.podTitle}>{episodeName}</Text>
            <Text style={styles.podDescription} {...(previewMode ? { numberOfLines: 1 } : {})}>
              {episodeDescription}
            </Text>
            <View style={styles.buttonRow}>
              <IconButton
                style={styles.podButton}
                iconName="ios-play-circle"
                iconColor={PRIMARY_COLOR}
                iconSize={40}
                onPress={() => {}}
              >
                Play
              </IconButton>
              <IconButton
                style={styles.podButton}
                iconName="ios-add-circle"
                iconSize={40}
                iconColor={PRIMARY_COLOR}
                onPress={() => {}}
              >
                Queue
              </IconButton>
              <IconButton
                style={styles.podButton}
                iconName="ios-information-circle"
                iconColor={PRIMARY_COLOR}
                iconSize={40}
                onPress={this.onInfoPress}
              >
                More
              </IconButton>
            </View>
          </View>
        </PostRow>
      </View>
    )
  }
}

PodPost.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5
  },
  podButton: {}
})

export default PodPost
