import { all } from 'redux-saga/effects'

import { watchTestListLoadingSaga } from './testList'
import { watchGetCurrentTaskSaga } from './currentTest'


export default function* rootSaga() {
  yield all([
    watchTestListLoadingSaga(),
    watchGetCurrentTaskSaga(),
  ])
}