import React, { Component } from 'react'
import {
  View, TextInput, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { Text } from '../common'
import {
  COLOR1, COLOR3, COLOR2, BACKGROUND
} from '../../styles/common'

class CommentBar extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', height: 0 }
  }

  render() {
    const { text, height } = this.state
    const { currentUser, commentSubmitted, itemId } = this.props
    const { name, userImageUri } = currentUser
    return (
      <View style={styles.commentContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: userImageUri }} style={styles.authorImage} />
        </View>
        <TextInput
          style={[styles.input, { height: Math.max(28, height) }]}
          placeholder="Comment..."
          placeholderTextColor={COLOR3}
          selectionColor={COLOR2}
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
            this.setState({ text: '', height: 28 })
            commentSubmitted({
              itemId,
              author: name,
              authorImageUri: userImageUri,
              content: text
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
  commentSubmitted: PropTypes.func.isRequired,
  itemId: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: COLOR1,
    borderRadius: 5,
    backgroundColor: COLOR1
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
    backgroundColor: COLOR2,
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
