import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { PRIMARY_COLOR } from '../../styles/common'

const AppText = ({ style, children }) => <Text style={[styles.textStyle, style]}>{children}</Text>

const styles = StyleSheet.create({
  textStyle: {
    color: PRIMARY_COLOR
  }
})

export default AppText
