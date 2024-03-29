import React, { Component } from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity, ScrollView
} from 'react-native'
import { COLOR2, BACKGROUND } from '../../styles/common'
import {
  Text, Icon, ScreenContainer, ScreenItemContainer
} from '../../components/common'
import { secondsToString, unixTimeToString } from '../../../assets/functions'
import EpisodeRow from '../../components/Podcast/EpisodeRow'
import GroupRow from '../../components/Podcast/GroupRow'
import Card from '../../components/Podcast/Card'
import Section from '../../components/Podcast/Section'
import RateSection from '../../components/Episode/RateSection'

class PodcastScreen extends Component {
  onRateStarPress = (rating) => {
    const { podcastRateStarPressed, navigation } = this.props
    const { authorId } = navigation.state.params
    podcastRateStarPressed({ id: authorId, rating })
  }

  goToDetail = (id, type) => {
    const { navigation } = this.props
    if (type === 'review') return null // Temporary solution
    navigation.push('DetailView', { id, type })
    return null
  }

  renderLatestEpisodes = (list, data) => list.map((entry) => {
    const episode = data.find(x => x.id === entry)
    return (
      <View key={episode.id} style={{ paddingVertical: 10 }}>
        <EpisodeRow
          timeStamp={unixTimeToString(episode.timeStamp)}
          episodeName={episode.episodeName}
          length={secondsToString(episode.length)}
          onPress={() => this.goToDetail(episode.id, episode.type)}
        />
      </View>
    )
  })

  renderCard = (list, data) => list.map((entry) => {
    const post = data.find(x => x.id === entry)
    return (
      <Card
        key={post.id}
        type={post.type}
        timeStamp={post.timeStamp}
        content={post.content}
        author={post.author}
        authorImageUri={post.authorImageUri}
        rating={post.rating}
        pollQuestion={post.pollQuestion}
        onPress={() => this.goToDetail(post.id, post.type)}
      />
    )
  })

  renderGroupRows = list => list.map(entry => (
    <GroupRow key={entry.id} name={entry.name} groupImageUri={entry.groupImageUri} />
  ))

  render() {
    const {
      navigation, podcasts, posts, reviews, episodes
    } = this.props
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
      podcastName, creator, podcastImageUri, description, discussionGroups, rating
    } = podcast
    return (
      <ScreenContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ScreenItemContainer style={{ marginVertical: 15 }}>
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
              <Section
                heading="Latest Episodes"
                onPress={() => navigation.navigate('DetailListView', {
                  id: authorId,
                  type: 'episode',
                  list: podcast.episodes
                })
                }
              >
                {this.renderLatestEpisodes(podcast.episodes, episodes)}
              </Section>
            </View>
            <View style={styles.row}>
              <Section heading="Latest Posts">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {this.renderCard(podcast.posts, posts)}
                </ScrollView>
              </Section>
            </View>
            <View style={styles.row}>
              <Section heading="Average Rating">
                <RateSection rating={rating} onRateStarPress={this.onRateStarPress} />
              </Section>
            </View>
            <View style={styles.row}>
              <Section heading="Latest Reviews">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {this.renderCard(podcast.reviews, reviews)}
                </ScrollView>
              </Section>
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={styles.textButtonContainer}>
                <Icon name="create" color={COLOR2} size={25} />
                <Text style={styles.textButton}>Write a review</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Section heading="Discussion Groups">
                {this.renderGroupRows(discussionGroups)}
              </Section>
            </View>
          </ScreenItemContainer>
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
    backgroundColor: COLOR2
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
  textButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 20,
    fontWeight: '300',
    color: COLOR2,
    marginLeft: 7
  }
})

export default PodcastScreen
