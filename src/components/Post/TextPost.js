import React from 'react'
import PropTypes from 'prop-types'
import Text from '../common/Text'

const TextPost = ({ postContent, previewMode }) => (
  <Text numberOfLines={previewMode ? 5 : null}>{postContent}</Text>
)

TextPost.propTypes = {
  postContent: PropTypes.string.isRequired,
  previewMode: PropTypes.bool
}

TextPost.defaultProps = {
  previewMode: false
}

export default TextPost
