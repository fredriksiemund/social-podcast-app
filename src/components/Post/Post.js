import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Ionicons'
import { PRIMARY_COLOR } from '../../styles/common'
import PostRow from './PostRow'
import Tag from './Tag'
import Text from '../common/Text'

const Post = ({
  podcaster,
  timePosted,
  podcasterImageUri,
  children,
  nbrOfLikes,
  nbrOfComments,
  tag
}) => (
  <View style={styles.postContainer}>
    <PostRow>
      <Image source={podcasterImageUri} style={styles.postImage} />
      <View style={styles.postHeader}>
        <Text style={styles.headerPodcaster}>{podcaster}</Text>
        <View style={styles.headerSubheader}>
          <Text style={styles.headerTime}>{timePosted}</Text>
          {tag ? <Tag content={tag} /> : null}
        </View>
      </View>
    </PostRow>
    <PostRow>{children}</PostRow>
    <PostRow style={styles.buttons}>
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
)

Post.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  nbrOfComments: PropTypes.number.isRequired,
  nbrOfLikes: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired,
  tag: PropTypes.string
}

Post.defaultProps = {
  tag: undefined
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
  headerSubheader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTime: {
    fontSize: 12,
    fontWeight: '400'
  },
  textSection: {
    fontSize: 15
  },
  postButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  postButtonNumber: {
    fontSize: 15,
    paddingLeft: 5
  },
  buttons: {
    paddingHorizontal: 15
  }
})

export default Post
