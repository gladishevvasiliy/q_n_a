import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  process: {
    isLoading: false,
    error: null,
  },
  value: []
};

const testList = createSlice({
  name: 'testList',
  initialState,
  reducers: {
    testListLoading: (state, action) => {
      state.process.isLoading = true
    },
    testListLoadingSuccess: (state, action) => {
      state.value = action.payload
      state.process.isLoading = false
    },
    testListLoadingFailed: (state, action) => {
      state.process.error = action.payload
    }
  },
});

const { actions, reducer } = testList

const {
  testListLoading,
  testListLoadingSuccess,
  testListLoadingFailed,
} = actions

export {
  reducer,
  testListLoading,
  testListLoadingSuccess,
  testListLoadingFailed,
}

