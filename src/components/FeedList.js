import React, { Component } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Post from './Post/Post'

class FeedList extends Component {
  renderItem = ({ item }) => {
    const {
      likeButtonPressed, pollOptionPressed, goToPost, navigation
    } = this.props
    const postProps = {
      ...item,
      likeButtonPressed,
      pollOptionPressed,
      goToPost,
      navigation,
      previewPost: true
    }
    return (
      <View style={styles.post}>
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

const styles = StyleSheet.create({
  post: {
    marginVertical: 7
  }
})

export default FeedList
