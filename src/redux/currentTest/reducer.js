import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  process: {
    isLoading: false,
    error: null,
  },
  value: {}
};

const currentTest = createSlice({
  name: 'currentTest',
  initialState,
  reducers: {
    currentTestLoading: (state, action) => {
      state.process.isLoading = true
    },
    currentTestLoadingSuccess: (state, action) => {
      state.value = action.payload
      state.process.isLoading = false
    },
    currentTestLoadingFailed: (state, action) => {
      state.process.error = action.payload
    }
  },
});

const { actions, reducer } = currentTest

const {
  currentTestLoading,
  currentTestLoadingSuccess,
  currentTestLoadingFailed,
} = actions

export {
  reducer,
  currentTestLoading,
  currentTestLoadingSuccess,
  currentTestLoadingFailed,
}

