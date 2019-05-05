import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Comment from './Comment/Comment'
import CommentBar from './Comment/CommentBar'
import Text from './common/Text'
import PodDetail from './Podcast/PodDetail'
import Post from './Post/Post'

class DetailAndCommentsList extends Component {
  renderTop = () => {
    const {
      id, type, currentUser, comments, commentSubmitted
    } = this.props
    let detail
    if (type === 'episode') detail = <PodDetail {...this.props} />
    else detail = <Post {...this.props} />
    return (
      <View>
        {detail}
        <Text style={styles.nbrOfComments}>{`${comments.nbrOfComments} comments`}</Text>
        <View style={styles.commentBar}>
          <CommentBar {...{ currentUser, commentSubmitted }} itemId={id} />
        </View>
      </View>
    )
  }

  render() {
    const { comments, id, commentLikeButtonPressed } = this.props
    return (
      <FlatList
        data={comments.comments}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={this.renderTop()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Comment onLikePress={() => commentLikeButtonPressed(item.id, id)} {...item} />
          </View>
        )}
      />
    )
  }
}

DetailAndCommentsList.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  commentSubmitted: PropTypes.func.isRequired,
  commentLikeButtonPressed: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  comments: PropTypes.shape({
    nbrOfComments: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired,
  episodeName: PropTypes.string,
  episodeDescription: PropTypes.string,
  nbrOfListens: PropTypes.number,
  length: PropTypes.number,
  rating: PropTypes.shape({
    totalRating: PropTypes.number.isRequired,
    nbrOfRatings: PropTypes.number.isRequired,
    userRating: PropTypes.number
  }),
  rateStarPressed: PropTypes.func,
  postContent: PropTypes.string,
  nbrOfLikes: PropTypes.number,
  likeButtonPressed: PropTypes.func,
  liked: PropTypes.bool,
  poll: PropTypes.shape({
    totalVotes: PropTypes.number.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        option: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        selected: PropTypes.bool.isRequired
      })
    ).isRequired
  }),
  pollQuestion: PropTypes.string,
  pollOptionPressed: PropTypes.func
}

DetailAndCommentsList.defaultProps = {
  episodeName: null,
  episodeDescription: null,
  nbrOfListens: null,
  length: null,
  rating: null,
  rateStarPressed: null,
  postContent: null,
  nbrOfLikes: null,
  likeButtonPressed: null,
  liked: null,
  poll: null,
  pollQuestion: null,
  pollOptionPressed: null
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

export default DetailAndCommentsList
