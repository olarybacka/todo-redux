import ActionCreator from '../actionCreator'

export default {
  getTodos: ActionCreator('GET_TODOS'),
  postTodoItem: ActionCreator('POST_TODO_ITEM'),
  putTodoItem: ActionCreator('PUT_TODO_ITEM'),
  deleteTodoItem: ActionCreator('DELETE_TODO_ITEM'),

  updateTodos: ActionCreator('UPDATE_TODOS'),
  setTodoItemName: ActionCreator('SET_TODO_ITEM_NAME'),

  setLoading: ActionCreator('SET_LOADING'),
  clearLoading: ActionCreator('UNSET_LOADING')
}
