import actionCreators from './actionCreators'
const initialState = {
  listName: '',
  lists: [],
  todos: [],
  todoLists: [],
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionCreators.updateLists.type:
      return {
        ...state,
        lists: payload,
      }
    case actionCreators.setListItemName.type:
      return {
        ...state,
        name: payload,
      }
    case actionCreators.updateTodos.type:
      return {
        ...state,
        todos: payload,
      }
    default:
      return state
  }
}
