import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { BACKGROUND, PRIMARY_COLOR } from '../styles/common'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text style={styles.textStyle}>Feed </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: BACKGROUND,
    padding: 5
  },
  textStyle: {
    color: PRIMARY_COLOR
  }
})

export default Feed
