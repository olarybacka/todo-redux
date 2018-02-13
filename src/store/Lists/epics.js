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

const getListEpic = action$ =>
  action$.ofType(actionCreators.getLists.type).mergeMap(action =>
    ajax
      .get(baseUrl('todolists/'))
      .map(res => res.response)
      .mergeMap(res => Observable.of(actionCreators.updateLists.create(res)))
  )

const addListEpic = action$ =>
  action$.ofType(actionCreators.addListItem.type).mergeMap(action =>
    ajax
      .post(baseUrl('todolists/'), action.payload)
      .map(res => res.response)
      .mergeMap(res => Observable.of(actionCreators.getLists.create()))
  )
const deleteListItem = action$ =>
  action$.ofType(actionCreators.deleteListItem.type).mergeMap(action =>
    ajax
      .remove(baseUrl(`todolists/${action.payload}`))
      .map(res => res.response)
      .mergeMap(res => Observable.of(actionCreators.getLists.create()))
  )

export const epics = combineEpics(getListEpic, addListEpic, deleteListItem)
