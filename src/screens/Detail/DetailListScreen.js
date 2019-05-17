import React, { Component } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Text, ScreenContainer, ScreenItemContainer } from '../../components/common'
import EpisodeRow from '../../components/Podcast/EpisodeRow'
import { unixTimeToString, secondsToString } from '../../../assets/functions'
import Post from '../../components/Feed/Post'

class DetailListScreen extends Component {
  renderTop = type => (
    <ScreenItemContainer style={{ marginVertical: 15 }}>
      <Text style={styles.heading}>{`All ${type}s`}</Text>
    </ScreenItemContainer>
  )

  renderItem = (item) => {
    const { navigation } = this.props
    if (item.type === 'episode') {
      return (
        <ScreenItemContainer>
          <View style={{ marginVertical: 10 }}>
            <EpisodeRow
              key={item.id}
              preview={false}
              timeStamp={unixTimeToString(item.timeStamp)}
              episodeName={item.episodeName}
              length={secondsToString(item.length)}
              episodeDescription={item.episodeDescription}
              totalRating={item.rating.totalRating}
              onPress={() => navigation.push('DetailView', { id: item.id, type: item.type })}
            />
          </View>
        </ScreenItemContainer>
      )
    }
    return (
      <ScreenItemContainer>
        <View style={{ marginVertical: 10 }}>
          <Post key={item.id} {...item} />
        </View>
      </ScreenItemContainer>
    )
  }

  render() {
    const { navigation, episodes, posts } = this.props
    const { type, list } = navigation.state.params
    let data
    if (type === 'episode') {
      data = list.map(entry => episodes.find(x => x.id === entry))
    } else {
      data = list.map(entry => posts.find(x => x.id === entry))
    }
    return (
      <ScreenContainer>
        <FlatList
          style={{ flex: 1 }}
          data={data}
          ListHeaderComponent={this.renderTop(type)}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: '300'
  }
})

export default DetailListScreen
