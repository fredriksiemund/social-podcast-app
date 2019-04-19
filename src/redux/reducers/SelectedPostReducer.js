import { POST_PRESSED } from '../actions/types'

export default (state = -1, action) => {
  switch (action.type) {
    case POST_PRESSED:
      return action.payload
    default:
      return state
  }
}
