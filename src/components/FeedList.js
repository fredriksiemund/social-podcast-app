import React, { Component } from 'react'
import { FlatList } from 'react-native'
import TextPost from './Post/TextPost'
import PodPost from './Post/PodPost'
import PollPost from './Post/PollPost'

class FeedList extends Component {
  renderItem = ({ item }) => {
    const { likeButtonPress, pollOptionPressed } = this.props
    const { type, ...postProps } = item
    let jsx
    switch (type) {
      case 'text-post':
        jsx = <TextPost {...postProps} likeButtonPress={likeButtonPress} />
        break
      case 'pod-post':
        jsx = <PodPost {...postProps} />
        break
      case 'poll-post':
        jsx = (
          <PollPost
            {...postProps}
            likeButtonPress={likeButtonPress}
            pollOptionPressed={pollOptionPressed}
          />
        )
        break
      default:
        break
    }
    return jsx
  }

  render() {
    const { feed } = this.props
    return (
      <FlatList
        data={feed}
        keyExtractor={item => item.id.toString()}
        renderItem={this.renderItem}
      />
    )
  }
}

export default FeedList
