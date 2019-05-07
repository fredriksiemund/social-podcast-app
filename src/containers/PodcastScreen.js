import { connect } from 'react-redux'
import PodcastScreen from '../screens/PodcastScreen'

const mapStateToProps = state => ({
  podcasts: state.podcasts
})

export default connect(
  mapStateToProps,
  null
)(PodcastScreen)
