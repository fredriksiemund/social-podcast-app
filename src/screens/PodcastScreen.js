import React, { Component } from 'react'
import { View } from 'react-native'
import ScreenContainer from '../components/common/ScreenContainer'
import Text from '../components/common/Text'

class PodcastScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ScreenContainer>
        <View>
          <Text>textInComponent</Text>
        </View>
      </ScreenContainer>
    )
  }
}

export default PodcastScreen
