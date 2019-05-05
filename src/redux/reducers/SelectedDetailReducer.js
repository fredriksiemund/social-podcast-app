import { DETAIL_SELECTED } from '../actions/types'

const INITIAL_STATE = { id: null, type: '' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL_SELECTED:
      return { id: action.payload.id, type: action.payload.type }
    default:
      return state
  }
}
