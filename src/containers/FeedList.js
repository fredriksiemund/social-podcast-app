import { connect } from 'react-redux'
import FeedList from '../components/FeedList'
import { likeButtonPressed, pollOptionPressed, postPressed } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed, postPressed }
)(FeedList)
