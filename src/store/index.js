import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ListsReducer from './Lists/reducer'
import TodoReducer from './Todos/reducer'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { epics as ListsEpics } from './Lists/epics'
import { epics as TodosEpics } from './Todos/epics'

const rootReducer = combineReducers(
  {
    List: ListsReducer,
    Todo: TodoReducer
  }
)

const rootEpic = combineEpics(ListsEpics, TodosEpics)

const epicMiddleware = createEpicMiddleware(rootEpic)

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)
