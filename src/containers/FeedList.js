import { connect } from 'react-redux'
import FeedList from '../components/FeedList'
import { postLiked } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed
})

export default connect(
  mapStateToProps,
  { postLiked }
)(FeedList)
