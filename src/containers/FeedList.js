import { connect } from 'react-redux'
import FeedList from '../components/FeedList'
import { likeButtonPressed, pollOptionPressed, detailSelected } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed,
  posts: state.posts,
  episodes: state.episodes
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed, detailSelected }
)(FeedList)
