import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import ButtonRow from './ButtonRow'

const TextPost = ({
  postContent, previewMode, buttonRow, ...headerProps
}) => (
  <View>
    <PostHeader {...headerProps} />
    <PostRow>
      <Text style={styles.textSection} {...(previewMode ? { numberOfLines: 5 } : {})}>
        {postContent}
      </Text>
    </PostRow>
    <View style={styles.buttonRow}>
      <ButtonRow buttons={buttonRow} />
    </View>
  </View>
)

TextPost.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  postContent: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
  buttonRow: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      size: PropTypes.number,
      onPress: PropTypes.func
    })
  ).isRequired,
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
    marginTop: 10
  }
})

export default TextPost
