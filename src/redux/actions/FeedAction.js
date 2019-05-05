import { DETAIL_SELECTED } from './types'

// eslint-disable-next-line import/prefer-default-export
export const detailSelected = ({ id, type }) => ({
  type: DETAIL_SELECTED,
  payload: { id, type }
})
