import { connect } from 'react-redux'
import FeedList from '../components/FeedList'
import { likeButtonPress, pollOptionPressed } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed
})

export default connect(
  mapStateToProps,
  { likeButtonPress, pollOptionPressed }
)(FeedList)
