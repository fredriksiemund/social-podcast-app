import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import Icon from '../common/Icon'

class PodPost extends Component {
  onMorePress = () => {
    const { id, navigation, goToPost } = this.props
    goToPost(id)
    navigation.navigate('PodDetailView')
  }

  render() {
    const {
      episodeName, episodeDescription, previewMode, onMorePress, ...headerProps
    } = this.props
    return (
      <View>
        <PostHeader {...headerProps} tag="New episode" />
        <PostRow>
          <View style={styles.podContainer}>
            <Text style={styles.podTitle}>{episodeName}</Text>
            <Text style={styles.podDescription} numberOfLines={previewMode ? 1 : null}>
              {episodeDescription}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Icon name="play-circle" color={PRIMARY_COLOR} size={40} />
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="add-circle" color={PRIMARY_COLOR} size={40} />
                <Text style={styles.buttonText}>Queue</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.onMorePress()}>
                <Icon name="information-circle" color={PRIMARY_COLOR} size={40} />
                <Text style={styles.buttonText}>More</Text>
              </TouchableOpacity>
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
  timePosted: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  previewMode: PropTypes.bool
}

PodPost.defaultProps = {
  previewMode: false
}

const styles = StyleSheet.create({
  podContainer: {
    flex: 1,
    padding: 8,
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
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    paddingLeft: 5,
    fontWeight: '700'
  }
})

export default PodPost
