import React, { Component } from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native'
import { SECONDARY_COLOR, BACKGROUND, TERTIARY_COLOR } from '../styles/common'
import Text from '../components/common/Text'
import Icon from '../components/common/Icon'
import secondsToString from '../../assets/secondsToString'
import utcToString from '../../assets/utcToString'
import ScreenContainer from '../components/common/ScreenContainer'
import EpisodeRow from '../components/Podcast/EpisodeRow'
import Card from '../components/Podcast/Card'
import Section from '../components/Podcast/Section'
import RateSection from '../components/Episode/RateSection'

class PodcastScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderLatestEpisodes = latestEpisodes => latestEpisodes.map(entry => (
    <EpisodeRow
      key={entry.id}
      timeStamp={utcToString(entry.timeStamp)}
      episodeName={entry.episodeName}
      length={secondsToString(entry.length)}
    />
  ))

  renderLatestPosts = podcast => podcast.latestPosts.map(entry => (
    <Card
      key={entry.id}
      type={entry.type}
      timePosted={entry.timePosted}
      postContent={entry.postContent}
      pollQuestion={entry.pollQuestion}
      author={podcast.podcastName}
      authorImageUri={podcast.podcastImageUri}
    />
  ))

  renderLatestReviews = podcast => podcast.latestReviews.map(entry => (
    <Card
      key={entry.id}
      type={entry.type}
      timePosted={entry.timePosted}
      postContent={entry.postContent}
      rating={entry.rating}
      author={entry.author}
      authorImageUri={entry.authorImageUri}
    />
  ))

  render() {
    const { navigation, podcasts } = this.props
    const { authorId } = navigation.state.params
    const podcast = podcasts.find(x => x.id === authorId)
    if (!podcast) {
      return (
        <ScreenContainer>
          <Text>Loading...</Text>
        </ScreenContainer>
      )
    }
    const {
      podcastName, creator, podcastImageUri, description, latestEpisodes, rating
    } = podcast
    return (
      <ScreenContainer>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
          <Text style={styles.podcastName}>{podcastName}</Text>
          <Text style={styles.producer}>{`By ${creator}`}</Text>
          <View style={[styles.row, { flexDirection: 'row' }]}>
            <Image
              style={styles.podcastImage}
              source={{
                uri: podcastImageUri
              }}
            />
            <View style={styles.infoBox}>
              <Text style={{ fontWeight: '700' }}>About this podcast</Text>
              <Text style={{ fontSize: 13 }} numberOfLines={4}>
                {description}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Follow</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Section heading="Latest Episodes" onPress={() => {}}>
              <View style={{ borderTopColor: TERTIARY_COLOR, borderTopWidth: 1 }}>
                {this.renderLatestEpisodes(latestEpisodes)}
              </View>
            </Section>
          </View>
          <View style={styles.row}>
            <Section heading="Latest Posts" onPress={() => {}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {this.renderLatestPosts(podcast)}
              </ScrollView>
            </Section>
          </View>
          <View style={styles.row}>
            <Section heading="Average rating">
              <RateSection rating={rating} onRateStarPress={() => {}} />
            </Section>
          </View>
          <View style={styles.row}>
            <Section heading="Latest Reviews" onPress={() => {}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {this.renderLatestReviews(podcast)}
              </ScrollView>
            </Section>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.writeReviewContainer}>
              <Icon name="create" color={SECONDARY_COLOR} size={25} />
              <Text style={styles.writeReview}>Write a review</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <Section heading="Discussion Group">
              <View />
            </Section>
          </View>
        </ScrollView>
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  podcastName: {
    fontSize: 30,
    fontWeight: '300'
  },
  podcastImage: {
    height: 80,
    width: 80,
    borderRadius: 5
  },
  infoBox: {
    flexShrink: 1,
    marginLeft: 10
  },
  producer: {
    fontSize: 13
  },
  button: {
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: SECONDARY_COLOR
  },
  buttonText: {
    color: BACKGROUND,
    fontWeight: '700',
    fontSize: 16
  },
  row: {
    flex: 1,
    marginTop: 20
  },
  writeReviewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  writeReview: {
    fontSize: 20,
    fontWeight: '300',
    color: SECONDARY_COLOR,
    marginLeft: 5
  }
})

export default PodcastScreen
