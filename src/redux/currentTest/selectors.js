export const getCurrentTestProcess = (state) => state.testList.process
export const getCurrentTestValue = (state) => state.currentTest.value
export const getTestLength = (state) => {
  if (state.currentTest.value.exersises) {
    return state.currentTest.value.exersises.length
  }
}