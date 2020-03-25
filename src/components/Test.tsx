import React from 'react'
import { connect } from 'react-redux'
import { find } from 'lodash'
import styled from 'styled-components'
import Exersise from '../components/Exersise'
import Results from '../components/Results'
import ProgressBar from '../components/ProgressBar'
import StatusBar from '../components/StatusBar'
import { getCurrentTestValue, currentTestLoading } from '../redux/currentTest'
import {
  getIsTestFinishedValue,
  getIsTestRunningValue,
  changeExersiseIdList,
  setTestAndExersiseId,
  goToNextExersise,
  getExersiseId,
  setAnswer,
} from '../redux/testing'
import { getOptions } from '../utils'

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
  flex-direction: column;
`
const Header = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IProps {
  loadTest?: any
  test?: any
  id?: string | string[]
  exersiseId?: string
  setAnswer?: any
  setExersiseId?: any
  goToNextExersise?: any
  changeExersiseIdList?: any
  setActiveAnswer?: any
  isTestRunning?: boolean
  isTestFinished?: boolean
}

class Test extends React.Component<IProps> {
  componentDidMount = () => {
    const { loadTest, id } = this.props
    loadTest(id)
  }

  checkAnswer = answerData => {
    const { setAnswer, goToNextExersise } = this.props
    // setAnswer(answerData)
    goToNextExersise(answerData)
  }

  render() {
    const {
      test,
      exersiseId,
      isTestRunning,
      isTestFinished,
      changeExersiseIdList,
    } = this.props
    const { exersises, config = {} } = test
    const exersise =
      exersises && exersiseId ? find(exersises, { id: exersiseId }) : {}

    return (
      <>
        <Container>
          {test && (
            <>
              {isTestRunning && (
                <>
                  <Header>
                    <ProgressBar />
                  </Header>
                  <Middle>
                    <Exersise
                      defaultQuestion={test.defaultQuestion}
                      optionList={getOptions(config, exersise.answer)}
                      id={exersiseId}
                      value={exersise}
                    />
                  </Middle>
                  <StatusBar
                    changeList={changeExersiseIdList}
                    checkAnswer={this.checkAnswer}
                  />
                </>
              )}
              {isTestFinished && <Results />}
            </>
          )}
        </Container>
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
  changeExersiseIdList: data => dispatch(changeExersiseIdList(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
