import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BACKGROUND } from '../../styles/common'
import TextPost from '../../components/Post/TextPost'
import PodPost from '../../components/Post/PodPost'
import joeImg from '../../../assets/img/joe.jpeg'
import tedImg from '../../../assets/img/ted.jpg'
import freaksImg from '../../../assets/img/freaks.jpg'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <TextPost
          podcaster="The Joe Rogan Experience"
          podcasterImageUri={joeImg}
          postContent="The weather is amazing, walk with me through the pathway of more success. Take this
          journey with me, Lion! I’m up to something. Lion! How’s business? Boomin."
          nbrOfComments={321}
          nbrOfLikes={53}
          timePosted="42 minutes ago"
        />
        <PodPost
          podcaster="Freakonomics Radio"
          podcasterImageUri={freaksImg}
          episodeName="373. Why Rent Control Doesn’t Work"
          episodeDescription="I’m giving you cloth talk, cloth. Special clo..."
          timePosted="1 hour ago"
        />
        <TextPost
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
