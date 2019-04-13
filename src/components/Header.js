import React, { Component } from 'react'
import {
  Text, View, Platform, StatusBar
} from 'react-native'
import { NAV_BACKGROUND, PRIMARY_COLOR } from '../styles/common'

class Header extends Component {
  componentWillMount() {
    this.headerHeight = 60
    if (Platform.OS === 'android') {
      this.headerHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <View
        style={{
          height: this.headerHeight,
          backgroundColor: NAV_BACKGROUND,
          borderBottomWidth: 0
        }}
      >
        <Text style={{ color: PRIMARY_COLOR }}>Title</Text>
      </View>
    )
  }
}

export default Header
