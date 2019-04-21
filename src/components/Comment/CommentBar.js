import React, { Component } from 'react'
import {
  View, TextInput, StyleSheet, Image
} from 'react-native'
import Text from '../common/Text'
import {
  PRIMARY_COLOR, TERTIARY_COLOR, SECONDARY_COLOR, BACKGROUND
} from '../../styles/common'
import pic from '../../../assets/img/profile.png'

class CommentBar extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '', height: 0 }
  }

  render() {
    const { text, height } = this.state
    return (
      <View style={styles.commentContainer}>
        <View style={styles.imageContainer}>
          <Image source={pic} style={styles.authorImage} />
        </View>
        <TextInput
          style={[styles.input, { height: Math.max(30, height + 5) }]}
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
        <View style={styles.postButton}>
          <Text style={styles.buttonText}>Post</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    color: PRIMARY_COLOR,
    borderRadius: 10,
    backgroundColor: PRIMARY_COLOR
  },
  input: {
    flex: 1,
    marginBottom: 5,
    fontSize: 15
  },
  postButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  authorImage: {
    height: 24,
    width: 24,
    borderRadius: 12,
    margin: 8
  },
  buttonText: {
    color: BACKGROUND,
    fontWeight: '700'
  }
})

export default CommentBar
