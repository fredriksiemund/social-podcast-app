import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const AppIcon = ({ name, color, size }) => {
  const platform = Platform.OS === 'ios' ? 'ios-' : 'md-'
  return <Icon name={platform + name} color={color} size={size} />
}

export default AppIcon
