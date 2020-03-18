import { put, takeLatest } from 'redux-saga/effects'
import { delay } from '../../utils'
import config from '../../res/config'
import { testListLoadingSuccess, testListLoadingFailed } from './reducer'

const { tests } = config

function* testListLoadingSaga() {
  const isDEV = process.env.NODE_ENV === 'development'
  const backendURL = process.env.REACT_APP_BACKEND_ENDPOINT

  try {
    const data = yield isDEV
      ? delay(tests.map(test => ({ id: test.id, name: test.name })))
      : fetch(backendURL)
          .then(res => {
            return res.json()
          })
          .then(data => data)

    console.log('test list loaded', { data })

    yield put(testListLoadingSuccess(data))
  } catch (error) {
    yield put(testListLoadingFailed())
  }
}

export function* watchTestListLoadingSaga() {
  yield takeLatest('testList/testListLoading', testListLoadingSaga)
}
