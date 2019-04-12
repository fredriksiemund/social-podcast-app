import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed'
import Search from '../screens/Search'
import Profile from '../screens/Profile'

const iconSize = 40

const MainStack = createBottomTabNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-home" color={tintColor} size={iconSize} />
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-search" color={tintColor} size={iconSize} />
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name="md-person" color={tintColor} size={iconSize} />
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false
    }
  }
)

const RootStack = createStackNavigator({ screen: MainStack })

export default createAppContainer(RootStack)
