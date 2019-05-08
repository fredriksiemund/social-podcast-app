import React, { Component } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import FeedListItem from './Feed/FeedListItem'

class FeedList extends Component {
  renderItem = ({ item }) => {
    const {
      likeButtonPressed, pollOptionPressed, detailSelected, navigation
    } = this.props
    const postProps = {
      ...item,
      likeButtonPressed,
      pollOptionPressed,
      detailSelected,
      navigation,
      previewPost: true
    }
    return (
      <View style={styles.post}>
        <FeedListItem {...postProps} />
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
      <FlatList
        data={feedData}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
      />
    )
  }
}

FeedList.propTypes = {
  feed: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  }
})

export default FeedList
