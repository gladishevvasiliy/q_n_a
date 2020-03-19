export {
  reducer,
  currentTestLoading,
  currentTestLoadingSuccess,
  currentTestLoadingFailed
} from './reducer'

export {
  getCurrentTestValue,
  getCurrentTestProcess,
  getTestLength,
} from './selectors'

export {
  watchGetCurrentTaskSaga
} from './sagas'
