export const getTestId = (state) => state.testing.testId
export const getExersiseId = (state) => state.testing.exersiseId
export const getIsTestRunningValue = (state) => state.testing.isRunning
export const getIsTestFinishedValue = (state) => state.testing.isFinished
export const getResultsValue = (state) => state.testing.results
export const getCurrentTestProgressValue = (state) => state.testing.counter
export const getActiveAnswer = (state) => state.testing.activeAnswer