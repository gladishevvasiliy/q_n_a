import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
});

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleware, sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store