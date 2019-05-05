import { combineReducers } from 'redux'
import FeedReducer from './FeedReducer'
import CommentReducer from './CommentReducer'
import SelectedDetailReducer from './SelectedDetailReducer'
import CurrentUserReducer from './CurrentUserReducer'
import PostReducer from './PostReducer'
import EpisodeReducer from './EpisodeReducer'

export default combineReducers({
  feed: FeedReducer,
  posts: PostReducer,
  episodes: EpisodeReducer,
  comments: CommentReducer,
  selectedDetail: SelectedDetailReducer,
  currentUser: CurrentUserReducer
})
