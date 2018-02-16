import actionCreators from './actionCreators'
const initialState = {
  todoItemName: '',
  todos: [],
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
    default:
      return state
  }
}
