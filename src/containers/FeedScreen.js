import { connect } from 'react-redux'
import FeedScreen from '../screens/Feed/FeedScreen'
import { likeButtonPressed, pollOptionPressed } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed,
  posts: state.posts,
  episodes: state.episodes
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed }
)(FeedScreen)
