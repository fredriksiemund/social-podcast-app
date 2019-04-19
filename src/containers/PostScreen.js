import { connect } from 'react-redux'
import PostScreen from '../screens/Feed/PostScreen'
import { likeButtonPressed, pollOptionPressed } from '../redux/actions'

const mapStateToProps = state => ({
  feed: state.feed,
  selectedPost: state.selectedPost
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed }
)(PostScreen)
