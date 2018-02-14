import ActionCreator from '../actionCreator'

export default {
  getTodos: ActionCreator('GET_TODOS'),
  postTodoItem: ActionCreator('POST_TODO_ITEM'),
  putTodoItem: ActionCreator('PUT_TODO_ITEM'),

  updateTodos: ActionCreator('UPDATE_TODOS'),
  setTodoItemName: ActionCreator('SET_TODO_ITEM_NAME'),
}
