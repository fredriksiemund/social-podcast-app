import { connect } from 'react-redux'
import DetailScreen from '../screens/Detail/DetailScreen'
import {
  rateStarPressed,
  commentSubmitted,
  pollOptionPressed,
  likeButtonPressed,
  commentLikeButtonPressed
} from '../redux/actions'

const mapStateToProps = state => ({
  posts: state.posts,
  episodes: state.episodes,
  comments: state.comments,
  currentUser: state.currentUser,
  selectedDetail: state.selectedDetail
})

export default connect(
  mapStateToProps,
  {
    commentSubmitted,
    rateStarPressed,
    pollOptionPressed,
    likeButtonPressed,
    commentLikeButtonPressed
  }
)(DetailScreen)
