import React, { Component } from 'react'
import {
  View, TextInput, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import Text from '../common/Text'
import {
  PRIMARY_COLOR, TERTIARY_COLOR, SECONDARY_COLOR, BACKGROUND
} from '../../styles/common'

class CommentBar extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', height: 0 }
  }

  render() {
    const { text, height } = this.state
    const { currentUser, commentSubmitted, postId } = this.props
    const { name, userImageUri } = currentUser
    return (
      <View style={styles.commentContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: userImageUri }} style={styles.authorImage} />
        </View>
        <TextInput
          style={[styles.input, { height: Math.max(28, height) }]}
          placeholder="Comment..."
          placeholderTextColor={TERTIARY_COLOR}
          selectionColor={SECONDARY_COLOR}
          multiline
          onChangeText={(input) => {
            this.setState({ text: input })
          }}
          onContentSizeChange={(event) => {
            this.setState({ height: event.nativeEvent.contentSize.height })
          }}
          value={text}
        />
        <TouchableOpacity
          style={styles.postButton}
          onPress={() => {
            this.setState({ text: '', height: 0 })
            commentSubmitted({
              postId,
              author: name,
              authorImageUri: userImageUri,
              postContent: text
            })
          }}
        >
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

CommentBar.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    userImageUri: PropTypes.string.isRequired
  }).isRequired,
  commentSubmitted: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: PRIMARY_COLOR,
    borderRadius: 5,
    backgroundColor: PRIMARY_COLOR
  },
  input: {
    flex: 1,
    fontSize: 15,
    marginVertical: 5
  },
  postButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    borderRadius: 5,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 7
  },
  authorImage: {
    height: 24,
    width: 24,
    borderRadius: 12
  },
  buttonText: {
    color: BACKGROUND,
    fontWeight: '700'
  }
})

export default CommentBar
