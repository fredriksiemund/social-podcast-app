import { connect } from 'react-redux'
import DetailListScreen from '../screens/Detail/DetailListScreen'
import { likeButtonPressed, pollOptionPressed } from '../redux/actions'

const mapStateToProps = state => ({
  posts: state.posts,
  episodes: state.episodes
})

export default connect(
  mapStateToProps,
  { likeButtonPressed, pollOptionPressed }
)(DetailListScreen)
