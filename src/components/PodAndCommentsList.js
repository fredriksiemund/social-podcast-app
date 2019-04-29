import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import Post from './Post/Post'
import CommentBar from './Comment/CommentBar'
import Text from './common/Text'
import PodDetail from './Podcast/PodDetail'

class PodAndCommentsList extends Component {
  renderTop = () => {
    const {
      currentUser, comments, commentSubmitted, id
    } = this.props
    return (
      <View>
        <PodDetail {...this.props} />
        <Text style={styles.nbrOfComments}>{`${comments.nbrOfComments} comments`}</Text>
        <View style={styles.commentBar}>
          <CommentBar {...{ currentUser, commentSubmitted }} postId={id} />
        </View>
      </View>
    )
  }

  render() {
    const { comments, id, likeButtonPressed } = this.props
    return (
      <FlatList
        data={comments.comments}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={this.renderTop()}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Post
              type="comment"
              parentPostId={id}
              likeButtonPressed={likeButtonPressed}
              {...item}
            />
          </View>
        )}
      />
    )
  }
}

PodAndCommentsList.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  episodeName: PropTypes.string.isRequired,
  episodeDescription: PropTypes.string.isRequired,
  nbrOfListens: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  rating: PropTypes.shape({
    totalRating: PropTypes.number.isRequired,
    nbrOfRatings: PropTypes.number.isRequired,
    userRating: PropTypes.number
  }).isRequired,
  rateStarPressed: PropTypes.func.isRequired,
  commentSubmitted: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}).isRequired
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
    marginTop: 15
  }
})

export default PodAndCommentsList
