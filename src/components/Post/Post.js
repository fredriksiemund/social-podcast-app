import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import TextPost from './TextPost'
import PodPost from './PodPost'
import PollPost from './PollPost'

class Post extends Component {
  renderPost = (postProps) => {
    const { type } = postProps
    let jsx
    switch (type) {
      case 'text-post':
        jsx = <TextPost {...postProps} />
        break
      case 'pod-post':
        jsx = <PodPost {...postProps} />
        break
      case 'poll-post':
        jsx = <PollPost {...postProps} />
        break
      default:
        break
    }
    return jsx
  }

  render() {
    return <View>{this.renderPost(this.props)}</View>
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
  // TODO
}

export default Post
