import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Icon from '../components/common/Icon'
import FeedScreen from '../containers/FeedScreen'
import SearchScreen from '../screens/Search/SearchScreen'
import ProfileScreen from '../screens/Profile/ProfileScreen'
import DetailScreen from '../containers/DetailScreen'
import PodcastScreen from '../containers/PodcastScreen'
import DetailListScreen from '../containers/DetailListScreen'
import { COLOR2, COLOR1, NAV_BACKGROUND } from '../styles/common'

const headerStyle = {
  headerStyle: {
    backgroundColor: NAV_BACKGROUND,
    borderBottomWidth: 0
  },
  headerTintColor: COLOR1
}

const MainStack = createBottomTabNavigator(
  {
    Feed: {
      screen: createStackNavigator({
        FeedView: {
          screen: FeedScreen,
          navigationOptions: {
            ...headerStyle,
            title: 'News'
          }
        },
        DetailView: {
          screen: DetailScreen,
          navigationOptions: {
            ...headerStyle
          }
        },
        PodcastView: {
          screen: PodcastScreen,
          navigationOptions: {
            ...headerStyle
          }
        },
        DetailListView: {
          screen: DetailListScreen,
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
        SearchView: {
          screen: SearchScreen,
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
        ProfileView: {
          screen: ProfileScreen,
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
      activeTintColor: COLOR2,
      inactiveTintColor: COLOR1,
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
      name = 'list'
      break
    case 'Search':
      name = 'search'
      break
    case 'Profile':
      name = 'person'
      break
    default:
      return null
  }
  return <Icon name={name} color={tintColor} size={40} />
}

export default createAppContainer(RootStack)
