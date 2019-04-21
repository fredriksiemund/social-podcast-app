import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'
import Post from './Post/Post'

class FeedList extends Component {
  renderItem = ({ item }) => {
    const {
      likeButtonPressed, pollOptionPressed, postPressed, navigation
    } = this.props
    const postProps = {
      ...item,
      likeButtonPressed,
      pollOptionPressed,
      postPressed,
      navigation,
      previewPost: true
    }
    return (
      <View>
        <Post {...postProps} />
      </View>
    )
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

FeedList.propTypes = {
  feed: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired }).isRequired
}

export default FeedList
