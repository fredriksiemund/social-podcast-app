import React from 'react'
import { StyleSheet, View } from 'react-native'

const PostRow = ({ style, children }) => <View style={[style, styles.postRow]}>{children}</View>

const styles = StyleSheet.create({
  postRow: {
    flexDirection: 'row',
    paddingTop: 10
  }
})

export default PostRow
