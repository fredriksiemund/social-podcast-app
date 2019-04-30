import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import utcToString from '../../../assets/utcToString'
import PostRow from './PostRow'
import Tag from '../common/Tag'
import Text from '../common/Text'

const PostHeader = ({
  author, timePosted, authorImageUri, tag
}) => (
  <View>
    <PostRow>
      <Image source={{ uri: authorImageUri }} style={styles.postImage} />
      <View style={styles.postHeader}>
        <Text numberOfLines={2} style={styles.headerAuthor}>{author}</Text>
        <View style={styles.headerSubheader}>
          <Text style={styles.headerTime}>{utcToString(timePosted)}</Text>
          {tag ? <Tag content={tag} /> : null}
        </View>
      </View>
    </PostRow>
  </View>
)

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  tag: PropTypes.string
}

PostHeader.defaultProps = {
  tag: undefined
}

const styles = StyleSheet.create({
  postImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  postHeader: {
    justifyContent: 'center',
    paddingLeft: 10
  },
  headerAuthor: {
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
