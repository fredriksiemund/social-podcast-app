import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import CommentBar from './Comment/CommentBar'
import Text from './common/Text'

const CommentSection = (props) => {
  const { nbrOfComments, comments } = props
  return (
    <View>
      <CommentBar />
      <Text style={styles.nbrOfComments}>{`${nbrOfComments} comments`}</Text>
    </View>
  )
}

CommentSection.propTypes = {
  nbrOfComments: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      authorImageUri: PropTypes.string.isRequired,
      timePosted: PropTypes.string.isRequired,
      postContent: PropTypes.string.isRequired,
      nbrOfLikes: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired
    })
  ).isRequired
}

const styles = StyleSheet.create({
  nbrOfComments: {
    fontSize: 25,
    fontWeight: '300',
    marginTop: 10
  }
})

export default CommentSection
