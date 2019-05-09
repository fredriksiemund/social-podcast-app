import { connect } from 'react-redux'
import PodcastScreen from '../screens/PodcastScreen'
import { podcastRateStarPressed } from '../redux/actions'

const mapStateToProps = state => ({
  podcasts: state.podcasts
})

export default connect(
  mapStateToProps,
  { podcastRateStarPressed }
)(PodcastScreen)
