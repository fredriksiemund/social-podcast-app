import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import Text from '../common/Text'
import IconButton from '../common/IconButton'

const TextPost = (props) => {
  const {
    id,
    postContent,
    nbrOfLikes,
    nbrOfComments,
    liked,
    likeButtonPress,
    ...headerProps
  } = props
  return (
    <Post>
      <PostHeader {...headerProps} />
      <PostRow>
        <Text style={styles.textSection}>{postContent}</Text>
      </PostRow>
      <PostRow style={styles.buttons}>
        <IconButton
          style={styles.postButton}
          iconName={liked ? 'ios-heart' : 'ios-heart-empty'}
          iconSize={25}
          iconColor={liked ? SECONDARY_COLOR : PRIMARY_COLOR}
          onPress={() => likeButtonPress(id)}
        >
          <Text style={styles.postButtonNumber}>{nbrOfLikes}</Text>
        </IconButton>
        <IconButton
          style={styles.postButton}
          iconName="ios-chatboxes"
          iconSize={25}
          iconColor={PRIMARY_COLOR}
          onPress={() => {}}
        >
          <Text style={styles.postButtonNumber}>{nbrOfComments}</Text>
        </IconButton>
        <IconButton
          style={styles.postButton}
          iconName="ios-share-alt"
          iconSize={25}
          iconColor={PRIMARY_COLOR}
          onPress={() => {}}
        />
      </PostRow>
    </Post>
  )
}

TextPost.propTypes = {
  id: PropTypes.number.isRequired,
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired,
  likeButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  },
  postButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  postButtonNumber: {
    fontSize: 15,
    paddingLeft: 5,
    fontWeight: '700'
  },
  buttons: {
    paddingHorizontal: 15
  }
})

export default TextPost
