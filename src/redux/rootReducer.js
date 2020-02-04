
import {
  reducer as testListReducer,
} from './testList';

import {
  reducer as currentTestReducer,
} from './currentTest';

import {
  reducer as testingReducer,
} from './testing';

export const rootReducer = {
  testList: testListReducer,
  currentTest: currentTestReducer,
  testing: testingReducer
}