import actionCreators from './actionCreators'
const initialState = {
  isLoading: false,
}
export default (state = initialState, { type }) => {
  switch (type) {
    case actionCreators.setLoading.type:
      return {
        ...state,
        isLoading: true,
      }
    case actionCreators.clearLoading.type:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
