import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import Post from './Post'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import ButtonRow from './ButtonRow'

const TextPost = (props) => {
  const {
    id,
    postContent,
    nbrOfLikes,
    nbrOfComments,
    liked,
    likeButtonPress,
    pollPostContent,
    ...headerProps
  } = props
  const buttonRow = [
    {
      name: liked ? 'ios-heart' : 'ios-heart-empty',
      color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
      text: nbrOfLikes,
      onPress: () => likeButtonPress(id)
    },
    {
      name: 'ios-chatboxes',
      color: PRIMARY_COLOR,
      text: nbrOfComments
    },
    {
      name: 'ios-share-alt',
      color: PRIMARY_COLOR
    }
  ]
  return (
    <Post>
      <PostHeader {...headerProps} />
      <PostRow>
        <Text style={styles.textSection} numberOfLines={8}>
          {postContent}
        </Text>
      </PostRow>
      <ButtonRow buttons={buttonRow} />
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
  likeButtonPress: PropTypes.func.isRequired,
  pollPostContent: PropTypes.element
}

TextPost.defaultProps = {
  pollPostContent: undefined
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  }
})

export default TextPost
