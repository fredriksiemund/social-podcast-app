import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader'
import PostRow from './PostRow'
import Text from '../common/Text'
import ButtonRow from './ButtonRow'

class TextPost extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      postContent, previewMode, buttonRow, ...headerProps
    } = this.props
    return (
      <View>
        <PostHeader {...headerProps} />
        <PostRow>
          <Text style={styles.textSection} {...(previewMode ? { numberOfLines: 5 } : {})}>
            {postContent}
          </Text>
        </PostRow>
        <ButtonRow buttons={buttonRow} />
      </View>
    )
  }
}

TextPost.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  likeButtonPressed: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  postContent: PropTypes.string.isRequired,
  timePosted: PropTypes.string.isRequired,
  buttonRow: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  }
})

export default TextPost
