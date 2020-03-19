import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import styled from 'styled-components'
import Exersise from '../components/Exersise'
import Results from '../components/Results'
import ProgressBar from '../components/ProgressBar'
import { getCurrentTestValue, currentTestLoading } from '../redux/currentTest'
import {
  getIsTestFinishedValue,
  getIsTestRunningValue,
  setTestAndExersiseId,
  goToNextExersise,
  getExersiseId,
  setAnswer,
} from '../redux/testing'
import { getOptions } from '../utils'

const ProgressContainer = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`
const StyledTestContaiter = styled.div`
  width: 100%;
  max-width: 900px;
`

interface IProps {
  loadTest?: any
  test?: any
  id?: string | string[]
  exersiseId?: string
  setAnswer?: any
  setExersiseId?: any
  goToNextExersise?: any
  isTestRunning?: boolean
  isTestFinished?: boolean
}

class Test extends React.Component<IProps> {
  componentDidMount = () => {
    const { loadTest, id } = this.props
    loadTest(id)
  }

  onGetAnswer = answerData => {
    const { setAnswer, goToNextExersise } = this.props

    setAnswer(answerData)
    goToNextExersise(answerData)
  }

  render() {
    const { test, exersiseId, isTestRunning, isTestFinished, id } = this.props
    const { exersises, config = {} } = test
    const exersise =
      exersises && exersiseId ? find(exersises, { id: exersiseId }) : {}

    return (
      <StyledTestContaiter>
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
        {test && (
          <>
            {isTestRunning && (
              <Exersise
                defaultQuestion={test.defaultQuestion}
                optionList={getOptions(config, exersise.answer)}
                id={exersiseId}
                value={exersise}
                onGetAnswer={this.onGetAnswer}
              />
            )}
            {isTestFinished && <Results />}
          </>
        )}
      </StyledTestContaiter>
    )
  }
}

const mapStateToProps = state => ({
  test: getCurrentTestValue(state),
  exersiseId: getExersiseId(state),
  isTestRunning: getIsTestRunningValue(state),
  isTestFinished: getIsTestFinishedValue(state),
})

const mapDispatchToProps = dispatch => ({
  loadTest: id => dispatch(currentTestLoading(id)),
  setExersiseId: id => dispatch(setTestAndExersiseId({ exersiseId: id })),
  setAnswer: answerData => dispatch(setAnswer(answerData)),
  goToNextExersise: exersiseId => dispatch(goToNextExersise(exersiseId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
