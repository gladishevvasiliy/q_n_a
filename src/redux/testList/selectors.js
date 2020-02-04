export const getTestListProcess = (state) => state.testList.process
export const getTestListValue = (state) => state.testList.value
export const getTestNameAndIdList = (state) => {
  const { value } = state.testList
  if (value) {
    return value.map(task => ({ name: task.name, id: task.id }))
  }
}