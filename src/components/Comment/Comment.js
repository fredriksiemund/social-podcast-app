import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import Text from '../common/Text'
import IconButton from '../common/IconButton'

const Comment = ({
  author,
  authorImageUri,
  timePosted,
  postContent,
  liked,
  nbrOfLikes,
  onLikeButtonPress
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
            <Text style={styles.timePosted}>{timePosted}</Text>
          </View>
          <Text style={styles.content}>{postContent}</Text>
        </View>
        <View style={styles.information}>
          <Text style={styles.likes}>{nbrOfLikesText}</Text>
        </View>
      </View>
      <IconButton
        iconName={liked ? 'ios-heart' : 'ios-heart-empty'}
        iconColor={liked ? SECONDARY_COLOR : PRIMARY_COLOR}
        style={styles.likeButton}
        onPress={onLikeButtonPress}
      />
    </View>
  )
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
  timePosted: {
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
