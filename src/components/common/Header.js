import React from 'react'
import {
  View, Image, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import utcToString from '../../../assets/utcToString'
import Row from './Row'
import Tag from './Tag'
import Text from './Text'

const Header = ({
  author, timePosted, authorImageUri, tag, onPress
}) => {
  const header = (
    <View>
      <Row>
        <Image source={{ uri: authorImageUri }} style={styles.postImage} />
        <View style={styles.header}>
          <Text numberOfLines={2} style={styles.headerAuthor}>
            {author}
          </Text>
          <View style={styles.headerSubheader}>
            <Text style={styles.headerTime}>{utcToString(timePosted)}</Text>
            {tag ? <Tag content={tag} /> : null}
          </View>
        </View>
      </Row>
    </View>
  )
  if (onPress) {
    return <TouchableWithoutFeedback onPress={onPress}>{header}</TouchableWithoutFeedback>
  }
  return header
}

Header.propTypes = {
  author: PropTypes.string.isRequired,
  authorImageUri: PropTypes.string.isRequired,
  timePosted: PropTypes.number.isRequired,
  tag: PropTypes.string,
  onPress: PropTypes.func
}

Header.defaultProps = {
  tag: undefined,
  touchable: false
}

const styles = StyleSheet.create({
  postImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  header: {
    flexShrink: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 10
  },
  headerAuthor: {
    fontSize: 17,
    fontWeight: '700'
  },
  headerSubheader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTime: {
    fontSize: 11,
    fontWeight: '400'
  }
})

export default Header
