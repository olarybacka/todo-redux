import actionCreators from './actionCreators'
const initialState = {
  todos: [],
  isLoading: false,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionCreators.updateTodos.type:
      return {
        ...state,
        todos: [...payload].sort((a, b) => a.id - b.id),
      }
    case actionCreators.setTodoItemName.type:
      return {
        ...state,
        todoItemName: payload,
      }
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
