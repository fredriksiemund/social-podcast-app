import React, { Component } from 'react'
import { FlatList, TouchableHighlight, View } from 'react-native'
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
      preview: true
    }
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            postPressed(item.id)
            navigation.navigate('PostView')
          }}
        >
          <Post {...postProps} />
        </TouchableHighlight>
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
