import ActionCreator from '../actionCreator'

export default {
  getLists: ActionCreator('GET_LISTS'),
  updateLists: ActionCreator('UPDATE_LISTS'),

  addListItem: ActionCreator('ADD_LIST_ITEM'),
  setListItemName: ActionCreator('SET_LIST_ITEM_NAME'),
  putListItemName: ActionCreator('CHANGE_LIST_ITEM'),
  deleteListItem: ActionCreator('DELETE_LIST_ITEM'),

  getTodos: ActionCreator('GET_TODOS'),
  getTodosOfList: ActionCreator('GET_TODOS_OF_LIST'),

  updateTodos: ActionCreator('UPDATE_TODOS'),
  addTodoItem: ActionCreator('ADD_TODO_ITEM'),

  updateTodosOfList: ActionCreator('UPDATE_TODOS_OF_LIST')
}
