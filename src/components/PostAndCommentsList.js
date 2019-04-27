import React, { Component } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import ScreenContainer from './common/ScreenContainer'
import Post from './Post/Post'
import CommentBar from './Comment/CommentBar'
import Text from './common/Text'

class PostAndCommentsList extends Component {
  renderTop = () => {
    const {
      currentUser, comments, commentSubmitted, id
    } = this.props
    return (
      <View>
        <Post {...this.props} />
        <View style={styles.commentBar}>
          <CommentBar {...{ currentUser, commentSubmitted }} postId={id} />
        </View>
        <Text style={styles.nbrOfComments}>{`${comments.nbrOfComments} comments`}</Text>
      </View>
    )
  }

  render() {
    const { comments, id, likeButtonPressed } = this.props
    return (
      <ScreenContainer>
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
      </ScreenContainer>
    )
  }
}

PostAndCommentsList.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  postContent: PropTypes.string,
  comments: PropTypes.shape({
    nbrOfComments: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({}))
  }),
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

PostAndCommentsList.defaultProps = {
  postContent: null,
  comments: null,
  nbrOfLikes: null,
  likeButtonPressed: null,
  liked: null,
  poll: null,
  pollQuestion: null,
  pollOptionPressed: null
}

const styles = StyleSheet.create({
  nbrOfComments: {
    fontSize: 25,
    fontWeight: '300',
    marginVertical: 18
  },
  comment: {
    marginVertical: 15
  },
  commentBar: {
    marginTop: 15
  }
})

export default PostAndCommentsList
