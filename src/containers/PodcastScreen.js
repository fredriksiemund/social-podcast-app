import { connect } from 'react-redux'
import PodcastScreen from '../screens/Podcast/PodcastScreen'
import { podcastRateStarPressed } from '../redux/actions'

const mapStateToProps = state => ({
  podcasts: state.podcasts,
  posts: state.posts,
  reviews: state.reviews,
  episodes: state.episodes
})

export default connect(
  mapStateToProps,
  { podcastRateStarPressed }
)(PodcastScreen)
