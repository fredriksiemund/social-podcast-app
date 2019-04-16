import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import PostRow from './PostRow'
import Tag from './Tag'
import Text from '../common/Text'

const PostHeader = ({
  podcaster, timePosted, podcasterImageUri, tag
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
  </View>
)

PostHeader.propTypes = {
  podcaster: PropTypes.string.isRequired,
  podcasterImageUri: PropTypes.number.isRequired,
  timePosted: PropTypes.string.isRequired,
  tag: PropTypes.string
}

PostHeader.defaultProps = {
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
  }
})

export default PostHeader
