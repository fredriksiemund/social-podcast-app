import React from 'react'
import {
  View, Image, StyleSheet, TouchableWithoutFeedback
} from 'react-native'
import PropTypes from 'prop-types'
import utcToString from '../../../assets/utcToString'
import Tag from './Tag'
import Text from './Text'

const Header = ({
  author, timePosted, authorImageUri, tag, onPress, small
}) => {
  const header = (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{ uri: authorImageUri }}
        style={small ? styles.authorImageSmall : styles.authorImageLarge}
      />
      <View style={styles.header}>
        <Text numberOfLines={2} style={small ? styles.headerAuthorSmall : styles.headerAuthorLarge}>
          {author}
        </Text>
        <View style={styles.headerSubheader}>
          <Text style={styles.headerTime}>{utcToString(timePosted)}</Text>
          {tag ? <Tag content={tag} /> : null}
        </View>
      </View>
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
  onPress: PropTypes.func,
  small: PropTypes.bool
}

Header.defaultProps = {
  tag: undefined,
  touchable: false,
  small: false
}

const styles = StyleSheet.create({
  header: {
    flexShrink: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingLeft: 10
  },
  authorImageSmall: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  authorImageLarge: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  headerAuthorLarge: {
    fontSize: 17,
    fontWeight: '700'
  },
  headerAuthorSmall: {
    fontSize: 15,
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
