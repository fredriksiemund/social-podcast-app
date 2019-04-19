import { combineReducers } from 'redux'
import FeedReducer from './FeedReducer'
import SelectedPostReducer from './SelectedPostReducer'

export default combineReducers({
  feed: FeedReducer,
  selectedPost: SelectedPostReducer
})
