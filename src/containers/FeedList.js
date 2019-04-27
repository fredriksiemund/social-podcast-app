import { connect } from 'react-redux'
import FeedList from '../components/FeedList'
import { likeButtonPressed, pollOptionPressed, goToPost } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed, goToPost }
)(FeedList)
