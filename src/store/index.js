import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ListsReducer from "./Lists/reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { epics as ListsEpics } from "./Lists/epics";

const rootReducer = combineReducers({
  mainLists: ListsReducer
});

const rootEpic = combineEpics(ListsEpics);

const epicMiddleware = createEpicMiddleware(rootEpic);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);
