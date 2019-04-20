import React from 'react'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../styles/common'
import PostContainer from './PostContainer'
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
    likeButtonPressed,
    preview,
    ...headerProps
  } = props
  const buttonRow = [
    {
      name: liked ? 'ios-heart' : 'ios-heart-empty',
      color: liked ? SECONDARY_COLOR : PRIMARY_COLOR,
      text: nbrOfLikes,
      onPress: () => likeButtonPressed(id)
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
  const previewAttribute = preview ? { numberOfLines: 5 } : {}
  return (
    <PostContainer>
      <PostHeader {...headerProps} />
      <PostRow>
        <Text style={styles.textSection} {...previewAttribute}>
          {postContent}
        </Text>
      </PostRow>
      <ButtonRow buttons={buttonRow} />
    </PostContainer>
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
  likeButtonPressed: PropTypes.func.isRequired,
  preview: PropTypes.bool
}

TextPost.defaultProps = {
  preview: false
}

const styles = StyleSheet.create({
  textSection: {
    fontSize: 15
  }
})

export default TextPost
