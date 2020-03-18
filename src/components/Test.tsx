import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import styled from 'styled-components'
import Exersise from '../components/Exersise'
import Results from '../components/Results'
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

const StyledTestName = styled.p`
  font-size: 14pt;
`

interface IProps {
  loadTest?: any
  test?: any
  id?: string
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
    goToNextExersise(answerData.exersiseId)
  }

  render() {
    const { test, exersiseId, isTestRunning, isTestFinished, id } = this.props
    const { exersises, config = {} } = test
    const exersise =
      exersises && exersiseId ? find(exersises, { id: exersiseId }) : {}

    return (
      <>
        {test && (
          <>
            {isTestRunning && (
              <>
                <StyledTestName>{test.name}</StyledTestName>
                {exersise && (
                  <Exersise
                    defaultQuestion={test.defaultQuestion}
                    optionList={getOptions(config, exersise.answer)}
                    id={exersiseId}
                    value={exersise}
                    onGetAnswer={this.onGetAnswer}
                  />
                )}
              </>
            )}
            {isTestFinished && <Results />}
          </>
        )}
      </>
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
