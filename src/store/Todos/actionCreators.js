import ActionCreator from '../actionCreator'

export default {
  getTodos: ActionCreator('GET_TODOS'),
  updateTodos: ActionCreator('UPDATE_TODOS'),
  postTodoItem: ActionCreator('POST_TODO_ITEM'),
  setTodoItemName: ActionCreator('SET_TODO_ITEM_NAME'),
}
