import React, { Component } from 'react'
import {
  View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import secondsToString from '../../../assets/secondsToString'
import numberToString from '../../../assets/numberToString'
import { COLOR1, BACKGROUND, COLOR2 } from '../../styles/common'
import { Text, Icon, Header } from '../common'
import RateSection from './RateSection'

class EpisodeDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { fullDescription: false }
  }

  onRateStarPress = (rating) => {
    const { id, rateStarPressed } = this.props
    rateStarPressed({ postId: id, rating })
  }

  onHeaderPress = () => {
    const { authorId, navigation } = this.props
    navigation.navigate('PodcastView', { authorId })
  }

  render() {
    const {
      author,
      authorImageUri,
      episodeName,
      episodeDescription,
      timeStamp,
      nbrOfListens,
      length,
      size,
      rating
    } = this.props
    const { fullDescription } = this.state
    return (
      <View>
        <Header
          {...{
            author,
            authorImageUri,
            timeStamp,
            onPress: () => this.onHeaderPress()
          }}
        />
        <Text style={styles.episodeName}>{episodeName}</Text>
        <Text style={styles.infoText}>{`${numberToString(nbrOfListens)} listens`}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.playButton}>
            <Icon name="play-circle" color={COLOR2} size={40} />
            <View style={styles.playButtonText}>
              <Text style={styles.playText}>Play</Text>
              <Text style={styles.lengthText}>{`${secondsToString(length)}`}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="add-circle" color={COLOR1} size={30} />
            <Text style={styles.buttonText}>Queue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="cloud-download" color={COLOR1} size={30} />
            <Text style={styles.buttonText}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="share-alt" color={COLOR1} size={30} />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback
          onPress={() => this.setState({ fullDescription: !fullDescription })}
        >
          <View style={styles.row}>
            <Text style={styles.descriptionText}>Episode description:</Text>
            <Text numberOfLines={fullDescription ? null : 5}>
              {episodeDescription}
              <Text style={styles.infoText}>{`\nSize: ${size} MB`}</Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.row}>
          <RateSection rating={rating} onRateStarPress={this.onRateStarPress} />
        </View>
      </View>
    )
  }
}

EpisodeDetail.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  nbrOfListens: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    totalRating: PropTypes.number.isRequired,
    nbrOfRatings: PropTypes.number.isRequired,
    userRating: PropTypes.number
  }).isRequired,
  rateStarPressed: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  episodeName: {
    fontSize: 25,
    fontWeight: '300',
    marginTop: 20
  },
  descriptionText: {
    fontWeight: '700',
    fontSize: 16
  },
  infoText: {
    fontSize: 14,
    fontWeight: '300'
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  button: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: '700'
  },
  playButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 3,
    borderRadius: 30,
    backgroundColor: COLOR1,
    opacity: 0.9
  },
  playButtonText: {
    paddingRight: 15,
    marginLeft: 5
  },
  playText: {
    color: BACKGROUND,
    fontWeight: '700',
    fontSize: 16
  },
  lengthText: {
    fontSize: 13,
    fontWeight: '300',
    color: BACKGROUND
  },
  // rating: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 10
  // },
  // totalRating: {
  //   fontSize: 25,
  //   fontWeight: '300',
  //   marginRight: 6
  // },
  // starContainer: {
  //   alignItems: 'center'
  // },
  row: {
    marginTop: 15
  }
  // rate: {
  //   flex: 1,
  //   paddingHorizontal: 10,
  //   marginLeft: 3
  // }
})

export default EpisodeDetail
