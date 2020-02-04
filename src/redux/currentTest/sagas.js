import { put, takeLatest } from 'redux-saga/effects'
import { find } from 'lodash'
import config from '../../res/config'
import { currentTestLoadingSuccess, currentTestLoadingFailed } from './reducer'

import { setTestAndExersiseId, setExersiseIdList } from '../testing'

const { tests } = config

function* getCurrentTestSaga(action) {
  const id = action.payload

  const isDEV = process.env.NODE_ENV === 'development'
  const backendURL = process.env.REACT_APP_BACKEND_ENDPOINT

  try {
    const data = yield isDEV
      ? find(tests, { id })
      : fetch(backendURL)
          .then(res => {
            return res.json()
          })
          .then(data => data)

    console.log('current test loaded', { id, data })
    yield put(currentTestLoadingSuccess(data))
    yield put(setTestAndExersiseId({ testId: data.id, exersiseId: data.exersises[0].id }))
    yield put(setExersiseIdList(data.exersises.map(exersise => exersise.id)))
  } catch (error) {
    yield put(currentTestLoadingFailed())
  }
}

export function* watchGetCurrentTaskSaga() {
  yield takeLatest('currentTest/currentTestLoading', getCurrentTestSaga)
}
