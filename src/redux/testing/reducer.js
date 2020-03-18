import { createSlice } from '@reduxjs/toolkit';
import { filter } from 'lodash'
const initialState = {
  isRunning: true,
  isFinished: false,
  exersiseIdList: [],
  testId: undefined,
  exersiseId: undefined,
  results: []
};

const testing = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    setTestAndExersiseId: (state, action) => {
      const { testId, exersiseId } = action.payload
      // id должно быть строковым значением, иначе проверка 0 не выполнится
      if (testId) {
        state.testId = testId
      }
      if (exersiseId) {
        state.exersiseId = exersiseId
      }
    },
    setAnswer: (state, action) => {
      const answerData = action.payload
      state.results = [...state.results, answerData]
    },
    setExersiseIdList: (state, action) => {
      const exersiseIdList = action.payload
      state.exersiseIdList = exersiseIdList
    },
    goToNextExersise: (state, action) => {
      const exersiseId = action.payload
      state.exersiseIdList = filter(state.exersiseIdList, id => id !== exersiseId)
      // если закончились id заданий
      if (state.exersiseIdList.length === 0) {
        state.isRunning = false
        state.isFinished = true
      } else {
        state.exersiseId = state.exersiseIdList[0]
      }
    },
  },
});

const { actions, reducer } = testing

const {
  setTestAndExersiseId,
  setExersiseIdList,
  goToNextExersise,
  setAnswer
} = actions

export {
  reducer,
  setTestAndExersiseId,
  setExersiseIdList,
  goToNextExersise,
  setAnswer
}

