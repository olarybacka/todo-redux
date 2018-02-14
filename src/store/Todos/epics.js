import { combineEpics } from 'redux-observable'
import actionCreators from './actionCreators'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import * as ajax from '../../common/services/utils'
import { Observable } from 'rxjs/Observable'
import baseUrl from '../../common/services/baseUrl'

const getTodos = action$ =>
  action$.ofType(actionCreators.getTodos.type).mergeMap(() =>
    ajax
      .get(baseUrl('todos/'))
      .map(res => res.response)
      .mergeMap(res => Observable.of(actionCreators.updateTodos.create(res)))
  )

const postTodoItem = action$ =>
  action$.ofType(actionCreators.postTodoItem.type).mergeMap(action =>
    ajax
      .post(baseUrl('todos/'), action.payload)
      .map(res => res.response)
      .mergeMap(() => Observable.of(actionCreators.getTodos.create()))
  )

const putTodoItem = action$ =>
  action$.ofType(actionCreators.putTodoItem.type).mergeMap(action =>
    ajax
      .put(baseUrl(`todos/${action.payload.id}/`), action.payload.body)
      .map(res => res.response)
      .mergeMap(() => Observable.of(actionCreators.getTodos.create()))
  )

const deleteTodoItem = action$ =>
  action$.ofType(actionCreators.deleteTodoItem.type).mergeMap(action =>
    ajax
      .remove(baseUrl(`todos/${action.payload}/`))
      .map(res => res.response)
      .mergeMap(() => Observable.of(actionCreators.getTodos.create()))
  )

export const epics = combineEpics(getTodos, postTodoItem, putTodoItem, deleteTodoItem)
