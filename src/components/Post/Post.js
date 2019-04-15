import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import { PRIMARY_COLOR } from '../../styles/common'
import PostRow from './PostRow'
import Text from '../common/Text'

const Post = ({
  podcaster,
  timePosted,
  podcasterImageUri,
  postContent,
  nbrOfLikes,
  nbrOfComments
}) => (
  <View style={styles.postContainer}>
    <PostRow>
      <Image source={podcasterImageUri} style={styles.postImage} />
      <View style={styles.postHeader}>
        <Text style={styles.headerPodcaster}>{podcaster}</Text>
        <Text style={styles.headerTime}>{timePosted}</Text>
      </View>
    </PostRow>
    <View style={styles.postContent}>
      <PostRow>
        <Text style={styles.textSection}>{postContent}</Text>
      </PostRow>
      <PostRow>
        <View style={styles.postButton}>
          <Icon name="ios-heart-empty" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.postButtonNumber}>{nbrOfLikes}</Text>
        </View>
        <View style={styles.postButton}>
          <Icon name="ios-chatboxes" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.postButtonNumber}>{nbrOfComments}</Text>
        </View>
        <View style={styles.postButton}>
          <Icon name="ios-share-alt" color={PRIMARY_COLOR} size={25} />
        </View>
      </PostRow>
    </View>
  </View>
)

Post.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.number.isRequired,
  postContent: PropTypes.string.isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  postContainer: {
    paddingBottom: 10
  },
  postImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  postHeader: {
    justifyContent: 'center',
    paddingLeft: 10
  },
  headerPodcaster: {
    fontSize: 18,
    fontWeight: '700'
  },
  headerTime: {
    fontSize: 12,
    fontWeight: '400'
  },
  textSection: {
    fontSize: 15
  },
  postButton: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  postButtonNumber: {
    fontSize: 15,
    paddingLeft: 5
  },
  postContent: {
    paddingLeft: 10
  }
})

export default Post
