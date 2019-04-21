import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed/FeedScreen'
import Search from '../screens/Search/SearchScreen'
import Profile from '../screens/Profile/ProfileScreen'
import PostScreen from '../containers/PostScreen'
import {
  NAV_ACTIVE, NAV_INACTIVE, NAV_BACKGROUND, PRIMARY_COLOR
} from '../styles/common'

const headerStyle = {
  headerStyle: {
    backgroundColor: NAV_BACKGROUND,
    borderBottomWidth: 0
  },
  headerTintColor: PRIMARY_COLOR
}

const MainStack = createBottomTabNavigator(
  {
    Feed: {
      screen: createStackNavigator({
        FeedView: {
          screen: Feed,
          navigationOptions: {
            ...headerStyle,
            title: 'News'
          }
        },
        PostView: {
          screen: PostScreen,
          navigationOptions: {
            ...headerStyle
          }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderIcon('Feed', tintColor)
      }
    },
    Search: {
      screen: createStackNavigator({
        FeedView: {
          screen: Search,
          navigationOptions: {
            ...headerStyle,
            title: 'Search'
          }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderIcon('Search', tintColor)
      }
    },
    Profile: {
      screen: createStackNavigator({
        FeedView: {
          screen: Profile,
          navigationOptions: {
            ...headerStyle,
            title: 'Profile'
          }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderIcon('Profile', tintColor)
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: NAV_ACTIVE,
      inactiveTintColor: NAV_INACTIVE,
      style: {
        backgroundColor: NAV_BACKGROUND
      }
    }
  }
)

const RootStack = createStackNavigator({
  Main: {
    screen: MainStack,
    navigationOptions: {
      header: null
    }
  }
})

const renderIcon = (screen, tintColor) => {
  let name = ''
  switch (screen) {
    case 'Feed':
      name = 'ios-list'
      break
    case 'Search':
      name = 'ios-search'
      break
    case 'Profile':
      name = 'ios-person'
      break
    default:
      return null
  }
  return <Icon name={name} color={tintColor} size={40} />
}

export default createAppContainer(RootStack)
