import React, { Component } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { ScreenContainer, ScreenItemContainer, Text } from '../components/common'
import Comment from '../components/Comment/Comment'
import Post from '../components/Feed/Post'
import EpisodeDetail from '../components/Episode/EpisodeDetail'
import CommentBar from '../components/Comment/CommentBar'

class DetailScreen extends Component {
  renderTop = (nbrOfComments) => {
    const {
      navigation,
      currentUser,
      posts,
      episodes,
      rateStarPressed,
      likeButtonPressed,
      pollOptionPressed,
      commentSubmitted
    } = this.props
    const { id, type } = navigation.state.params
    let data
    let detail
    if (type === 'episode') {
      data = episodes.find(x => x.id === id)
      detail = <EpisodeDetail {...{ ...data, rateStarPressed }} />
    } else {
      data = posts.find(x => x.id === id)
      detail = <Post {...{ ...data, likeButtonPressed, pollOptionPressed }} />
    }
    return (
      <View style={{ marginTop: 15 }}>
        <ScreenItemContainer>
          {detail}
          <Text style={styles.nbrOfComments}>{`${nbrOfComments} comments`}</Text>
          <View style={styles.commentBar}>
            <CommentBar {...{ currentUser, commentSubmitted }} itemId={id} />
          </View>
        </ScreenItemContainer>
      </View>
    )
  }

  render() {
    const { comments, navigation, commentLikeButtonPressed } = this.props
    const { id } = navigation.state.params
    const commentList = comments.find(x => x.itemId === id)
    return (
      <ScreenContainer>
        <FlatList
          data={commentList.comments}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={this.renderTop(commentList.nbrOfComments)}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <ScreenItemContainer>
                <Comment onLikePress={() => commentLikeButtonPressed(item.id, id)} {...item} />
              </ScreenItemContainer>
            </View>
          )}
        />
      </ScreenContainer>
    )
  }
}

DetailScreen.propTypes = {
  currentUser: PropTypes.shape({}).isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  pollOptionPressed: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired,
  commentLikeButtonPressed: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  nbrOfComments: {
    fontSize: 30,
    fontWeight: '300',
    marginTop: 30
  },
  comment: {
    marginVertical: 15
  },
  commentBar: {
    marginVertical: 15
  }
})

export default DetailScreen
