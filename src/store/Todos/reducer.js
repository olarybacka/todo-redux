import actionCreators from './actionCreators'
const initialState = {
  todos: [],
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionCreators.updateTodos.type:
      return {
        ...state,
        todos: payload,
      }
    default:
      return state
  }
}
