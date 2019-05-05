import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, TERTIARY_COLOR } from '../../styles/common'
import Header from '../common/Header'
import Row from '../common/Row'
import Text from '../common/Text'
import Icon from '../common/Icon'

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
      timePosted,
      authorImageUri
    } = this.props
    return (
      <View>
        <Header
          {...{
            author,
            timePosted,
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
        </Row>
      </View>
    )
  }
}

EpisodePreview.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
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

export default EpisodePreview
