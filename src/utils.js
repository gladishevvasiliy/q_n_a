import { filter, random, shuffle } from 'lodash'

export const delay = (response) => {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300)
  });
  return promise.then(() => (response))
}

export const fileToBase64 = (file, callback) => {
  let reader = new FileReader();
  reader.readAsDataURL(file)
  reader.onload = function () {
    callback(reader.result)
  }
}

/* количество возможных опций, описанных в
config > tests > config > optionList должно
быть больше numberOfOptions
*/
export const getOptions = (config, trueAnswer) => {
  const { optionList, numberOfOptions } = config

  let listWithoutTrueAnswer = filter(optionList, option => option !== trueAnswer)
  const randomOptionsWithTrueAnswer = []

  for (let i = 0; i < numberOfOptions - 1; i++) {
    let randomIndex = random(0, listWithoutTrueAnswer.length - 1)
    randomOptionsWithTrueAnswer.push(listWithoutTrueAnswer[randomIndex])
    listWithoutTrueAnswer.splice(randomIndex, 1)
  }
  return shuffle([...randomOptionsWithTrueAnswer, trueAnswer])
}