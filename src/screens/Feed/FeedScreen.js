import React from 'react'
import { ScreenContainer } from '../../components/common'
import FeedList from '../../containers/FeedList'

const FeedScreen = ({ navigation }) => (
  <ScreenContainer>
    <FeedList navigation={navigation} />
  </ScreenContainer>
)

export default FeedScreen
