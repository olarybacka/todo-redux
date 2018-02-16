import actionCreators from './actionCreators'
const initialState = {
  todoItemName: '',
  todos: [],
  searchedTodo: ''
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
    case actionCreators.setSearchedTodo.type:
      return {
        ...state,
        searchedTodo: payload,
      }
    default:
      return state
  }
}
