import { combineEpics } from 'redux-observable'
import todoActions from '../Todos/actionCreators'
import listActions from '../Lists/actionCreators'
import actionCreators from './actionCreators'

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import { Observable } from 'rxjs/Observable'

const loadingSet = action$ =>
  action$
    .ofType(
      todoActions.getTodos.type,
      todoActions.postTodoItem.type,
      todoActions.putTodoItem.type,
      todoActions.deleteTodoItem.type,

      listActions.getLists.type,
      listActions.addListItem.type,
      listActions.deleteListItem.type,
      listActions.putListItemName.type
    )
    .mergeMap(() => Observable.of(actionCreators.setLoading.create()))

const loadingClear = action$ =>
  action$
    .ofType(todoActions.updateTodos.type, listActions.updateLists.type)
    .mergeMap(() => Observable.of(actionCreators.clearLoading.create()))

export const epics = combineEpics(loadingSet, loadingClear)
