import actionCreators from './actionCreators'
const initialState = {
  listName: '',
  lists: [],
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionCreators.updateLists.type:
      return {
        ...state,
        lists: [...payload].sort((a, b) => a.id - b.id),
      }
    case actionCreators.setListItemName.type:
      return {
        ...state,
        listName: payload,
      }
    default:
      return state
  }
}
