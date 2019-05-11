import { combineReducers } from 'redux'
import FeedReducer from './FeedReducer'
import CommentReducer from './CommentReducer'
import CurrentUserReducer from './CurrentUserReducer'
import PostReducer from './PostReducer'
import EpisodeReducer from './EpisodeReducer'
import PodcastReducer from './PodcastReducer'
import ReviewReducer from './ReviewReducer'

export default combineReducers({
  feed: FeedReducer,
  posts: PostReducer,
  podcasts: PodcastReducer,
  episodes: EpisodeReducer,
  comments: CommentReducer,
  currentUser: CurrentUserReducer,
  reviews: ReviewReducer
})
