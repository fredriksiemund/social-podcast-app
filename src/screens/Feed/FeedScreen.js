import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { ScreenContainer, ScreenItemContainer } from '../../components/common'
import FeedListItem from '../../components/Feed/FeedListItem'

class FeedScreen extends Component {
  renderItem = ({ item }) => {
    const { likeButtonPressed, pollOptionPressed, navigation } = this.props
    const itemProps = {
      ...item,
      likeButtonPressed,
      pollOptionPressed,
      navigation,
      previewPost: true
    }
    return (
      <View style={{ marginVertical: 15 }}>
        <ScreenItemContainer>
          <FeedListItem {...itemProps} />
        </ScreenItemContainer>
      </View>
    )
  }

  render() {
    const { feed, posts, episodes } = this.props
    const feedData = feed.map((entry) => {
      if (entry.type === 'episode') return episodes.find(x => x.id === entry.itemId)
      return posts.find(x => x.id === entry.itemId)
    })
    return (
      <ScreenContainer>
        <FlatList
          data={feedData}
          keyExtractor={item => item.id.toString()}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />
      </ScreenContainer>
    )
  }
}

export default FeedScreen
