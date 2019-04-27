import { GO_TO_POST } from '../actions/types'

export default (state = -1, action) => {
  switch (action.type) {
    case GO_TO_POST:
      return action.payload
    default:
      return state
  }
}
