import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../common'

const TextPost = ({ content, previewMode }) => (
  <Text numberOfLines={previewMode ? 5 : null}>{content}</Text>
)

TextPost.propTypes = {
  content: PropTypes.string.isRequired,
  previewMode: PropTypes.bool
}

TextPost.defaultProps = {
  previewMode: false
}

export default TextPost
