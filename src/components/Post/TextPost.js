import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import Icon from '../common/Icon'

const TextPost = ({
  postContent,
  previewMode,
  liked,
  onLikePress,
  onCommentPress,
  onSharePress,
  nbrOfLikes,
  nbrOfComments,
  previewPost,
  ...headerProps
}) => {
  const commentButton = previewPost ? (
    <TouchableOpacity style={styles.button} onPress={onCommentPress}>
      <Icon name="chatboxes" color={PRIMARY_COLOR} size={25} />
      <Text style={styles.buttonText}>{nbrOfComments}</Text>
    </TouchableOpacity>
  ) : null
  return (
    <View>
      <PostHeader {...headerProps} />
      <PostRow>
        <Text style={styles.textSection} {...(previewMode ? { numberOfLines: 5 } : {})}>
          {postContent}
        </Text>
      </PostRow>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={onLikePress}>
          <Icon
            name={liked ? 'heart' : 'heart-empty'}
            color={liked ? SECONDARY_COLOR : PRIMARY_COLOR}
            size={25}
          />
          <Text style={styles.buttonText}>{nbrOfLikes}</Text>
        </TouchableOpacity>
        {commentButton}
        <TouchableOpacity style={styles.button} onPress={onSharePress}>
          <Icon name="share-alt" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
TextPost.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  previewPost: PropTypes.bool.isRequired,
  onLikePress: PropTypes.func.isRequired,
  onCommentPress: PropTypes.func.isRequired,
  onSharePress: PropTypes.func.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  previewMode: PropTypes.bool
}

TextPost.defaultProps = {
  previewMode: false
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    paddingLeft: 5,
    fontWeight: '700'
  }
})

export default TextPost
