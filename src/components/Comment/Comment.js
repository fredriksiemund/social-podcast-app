import React from 'react'
import {
  View, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { COLOR1, COLOR2 } from '../../styles/common'
import utcToString from '../../../assets/utcToString'
import { Text, Icon } from '../common'

const Comment = ({
  author,
  authorImageUri,
  timeStamp,
  postContent,
  liked,
  nbrOfLikes,
  onLikePress
}) => {
  let nbrOfLikesText = nbrOfLikes === 0 ? '' : `${nbrOfLikes} like`
  if (nbrOfLikes > 1) nbrOfLikesText += 's'
  return (
    <View style={styles.commentContainer}>
      <Image style={styles.authorImage} source={{ uri: authorImageUri }} />
      <View style={styles.postContainer}>
        <View style={styles.post}>
          <View style={styles.commentHeader}>
            <Text style={styles.author}>{`${author}  `}</Text>
            <Text style={styles.timeStamp}>{utcToString(timeStamp)}</Text>
          </View>
          <Text style={styles.content}>{postContent}</Text>
        </View>
        <Text style={styles.likes}>{nbrOfLikesText}</Text>
      </View>
      <TouchableOpacity style={styles.likeButton} onPress={onLikePress}>
        <Icon name={liked ? 'heart' : 'heart-empty'} color={liked ? COLOR2 : COLOR1} size={25} />
      </TouchableOpacity>
    </View>
  )
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timeStamp: PropTypes.number.isRequired,
  postContent: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  onLikePress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row'
  },
  authorImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 15
  },
  postContainer: {
    flex: 1,
    flexWrap: 'wrap'
  },
  post: {
    flexDirection: 'column'
  },
  author: {
    fontWeight: '700'
  },
  content: {
    fontWeight: '400',
    marginVertical: 4
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  timeStamp: {
    fontSize: 12
  },
  likes: {
    fontSize: 12,
    fontWeight: '700'
  },
  likeButton: {
    marginHorizontal: 10,
    alignItems: 'flex-start'
  }
})

export default Comment
