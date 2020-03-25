import { createSlice } from '@reduxjs/toolkit';
import { filter, findIndex } from 'lodash'

const initialState = {
  isRunning: true,
  isFinished: false,
  exersiseIdList: [],
  testId: undefined,
  exersiseId: undefined,
  activeAnswer: {},
  results: [],
  counter: undefined
};

const testing = createSlice({
  name: 'testing',
  initialState,
  reducers: {
    setActiveAnswer: (state, action) => {
      state.activeAnswer = action.payload
    },
    resetActiveAnswer: (state) => {
      state.activeAnswer = {}
    },
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
      const newAnswerData = action.payload
      if (newAnswerData.result) {
        state.counter--;
      }
      if (findIndex(state.results, item => item.exersiseId === newAnswerData.exersiseId) === -1) {
        state.results = [...state.results, newAnswerData]
      }
    },
    setExersiseIdList: (state, action) => {
      const exersiseIdList = action.payload
      state.exersiseIdList = exersiseIdList
      state.counter = state.exersiseIdList.length
    },
    changeExersiseIdList: (state, action) => {
      const { result, exersiseId } = action.payload
      if (result) {
        state.exersiseIdList = filter(state.exersiseIdList, id => id !== exersiseId)
      } else {
        state.exersiseIdList = [...state.exersiseIdList.slice(1), state.exersiseIdList[0]]
      }
    },
    goToNextExersise: (state, action) => {
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
  changeExersiseIdList,
  setExersiseIdList,
  goToNextExersise,
  resetActiveAnswer,
  setActiveAnswer,
  setAnswer
} = actions

export {
  reducer,
  setTestAndExersiseId,
  changeExersiseIdList,
  setExersiseIdList,
  goToNextExersise,
  resetActiveAnswer,
  setActiveAnswer,
  setAnswer
}

