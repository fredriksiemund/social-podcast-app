import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { COLOR1, COLOR3 } from '../../styles/common'
import {
  Header, Row, Text, Icon
} from '../common'

class EpisodePreview extends Component {
  onMorePress = () => {
    const { id, type, navigation } = this.props
    navigation.navigate('DetailView', { id, type })
  }

  onHeaderPress = () => {
    const { authorId, navigation } = this.props
    navigation.navigate('PodcastView', { authorId })
  }

  render() {
    const {
      episodeName,
      episodeDescription,
      previewMode,
      author,
      timeStamp,
      authorImageUri
    } = this.props
    return (
      <View>
        <Header
          {...{
            author,
            timeStamp,
            authorImageUri,
            tag: 'New episode',
            onPress: () => this.onHeaderPress()
          }}
        />
        <Row>
          <View style={styles.podContainer}>
            <Text style={styles.podTitle}>{episodeName}</Text>
            <Text style={styles.podDescription} numberOfLines={previewMode ? 1 : null}>
              {episodeDescription}
            </Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button}>
                <Icon name="play-circle" color={COLOR1} size={35} />
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Icon name="add-circle" color={COLOR1} size={35} />
                <Text style={styles.buttonText}>Queue</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => this.onMorePress()}>
                <Icon name="information-circle" color={COLOR1} size={35} />
                <Text style={styles.buttonText}>More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Row>
      </View>
    )
  }
}

EpisodePreview.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  previewMode: PropTypes.bool
}

EpisodePreview.defaultProps = {
  previewMode: false
}

const styles = StyleSheet.create({
  podContainer: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: COLOR3,
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
    marginTop: 8
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

export default EpisodePreview
