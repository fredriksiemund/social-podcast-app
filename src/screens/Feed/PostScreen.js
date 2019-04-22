import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ScreenContainer from '../../components/common/ScreenContainer'
import Post from '../../components/Post/Post'
import CommentBar from '../../components/Comment/CommentBar'
import Text from '../../components/common/Text'

class PostScreen extends Component {
  renderTop = (postProps, nbrOfComments) => (
    <View>
      <Post {...postProps} />
      <CommentBar />
      <Text style={styles.nbrOfComments}>{`${nbrOfComments} comments`}</Text>
    </View>
  )

  render = () => {
    const {
      selectedPost, feed, likeButtonPressed, pollOptionPressed
    } = this.props
    const post = feed.find(x => x.id === selectedPost)
    const postProps = {
      ...post,
      likeButtonPressed,
      pollOptionPressed
    }
    return (
      <ScreenContainer>
        <FlatList
          data={post.comments.comments}
          ListHeaderComponent={this.renderTop(postProps, post.comments.nbrOfComments)}
          renderItem={({ item }) => <Post key={item.key} {...item} />}
        />
      </ScreenContainer>
    )
  }
}

const styles = StyleSheet.create({
  nbrOfComments: {
    fontSize: 25,
    fontWeight: '300',
    marginTop: 10
  }
})

export default PostScreen
