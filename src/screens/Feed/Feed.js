import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BACKGROUND } from '../../styles/common'
import Post from '../../components/Post/Post'
import joeImg from '../../../assets/img/joe.jpeg'
import tedImg from '../../../assets/img/ted.jpg'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Post
          podcaster="The Joe Rogan Experience"
          podcasterImageUri={joeImg}
          postContent="The weather is amazing, walk with me through the pathway of more success. Take this
          journey with me, Lion! I’m up to something. Lion! How’s business? Boomin."
          nbrOfComments={321}
          nbrOfLikes={53}
          timePosted="42 minutes ago"
        />
        <Post
          podcaster="Ted Radio Hour"
          podcasterImageUri={tedImg}
          postContent="A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm. Look at the sunset, life is amazing, life is beautiful, life is what you make it."
          nbrOfComments={104}
          nbrOfLikes={21}
          timePosted="3 hours ago"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: BACKGROUND,
    paddingHorizontal: 10
  }
})

export default Feed
