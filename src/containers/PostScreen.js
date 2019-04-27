import { connect } from 'react-redux'
import PostScreen from '../screens/Feed/PostScreen'
import { likeButtonPressed, pollOptionPressed, commentSubmitted } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed,
  selectedPost: state.selectedPost,
  currentUser: state.currentUser
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed, commentSubmitted }
)(PostScreen)
