import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { BACKGROUND } from '../../styles/common'
import Text from '../../components/common/Text'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.screenContainer}>
        <Text>Test</Text>
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

export default Profile
