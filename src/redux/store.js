import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store;