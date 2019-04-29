import { connect } from 'react-redux'
import PodDetailScreen from '../screens/Podcast/PodDetailScreen'
import { commentSubmitted, rateStarPressed, likeButtonPressed } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed,
  selectedPost: state.selectedPost,
  currentUser: state.currentUser
})

export default connect(
  mapStateToProps,
  {
    commentSubmitted,
    rateStarPressed,
    likeButtonPressed
  }
)(PodDetailScreen)
