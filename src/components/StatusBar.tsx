import React from 'react'
import { isNil } from 'lodash'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { StyledButton } from './Styles'
import Check from '../res/media/icons/checkmark.svg'
import Cross from '../res/media/icons/cross.svg'
import {
  goToNextExersise,
  getActiveAnswer,
  resetActiveAnswer,
} from '../redux/testing'

const StyledStatusBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 140px;
  border-top: 3px solid #eceff1;
  /* transition: all 0.2s; */
  margin-top: 5px;
  background-color: ${({ status }) =>
    isNil(status) ? '#fff' : status ? `#C9EE9C` : `#ffcdd2`};
`

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 30px;

  .wrongAnswer {
    background-color: #e53935;
    color: #fff;
    border: 0;
    border-bottom: 4px solid #c62828;

    :hover {
      background-color: #e53935;
      color: #fff;
      border: 0;
    }
  }

  .trueAnswer {
    background-color: #6eb51c;
    color: #fff;
    border: 0;
    border-bottom: 4px solid #599216;

    :hover {
      background-color: #6eb51c;
      color: #fff;
      border: 0;
    }
  }
`
const StyledCross = styled(Cross)`
  fill: #e53935;
`

const StyledCheck = styled(Check)`
  fill: #6eb51c;
`

const SkipButton = styled(StyledButton)`
  :disabled,
  button[disabled] {
    background-color: #e6e3e3;
    color: #9c9a9a;
  }
`

const NextButton = styled(StyledButton)`
  :disabled,
  button[disabled] {
    background-color: #e6e3e3;
    color: #9c9a9a;
  }
`

const Info = styled.div`
  color: ${({ status }) => (status ? `#6EB51C` : `#e53935`)};
  display: flex;
  margin: 20px 20px;
  height: 100px;

  h3 {
    font-size: 20pt;
    font-weight: 700;
  }

  p {
    font-size: 14pt;
  }

  svg {
    height: 100px;
    background: white;
    padding: 20px;
    padding: 5px;
    border-radius: 20px;
    padding: 20px;
    border-radius: 74px;
  }

  .text {
    margin-left: 20px;
  }

  .icon {
    margin-left: 20px;
  }
`

const StatusBar = ({
  activeAnswerData,
  checkAnswer,
  resetActiveAnswer,
  changeList,
}) => {
  const { trueAnswer, answerValue, result } = activeAnswerData

  const onCheck = () => {
    changeList(activeAnswerData)
    checkAnswer(activeAnswerData)
    resetActiveAnswer()
  }

  return (
    <StyledStatusBar status={result}>
      <ButtonBar>
        {isNil(result) ? (
          <SkipButton disabled={true}>Пропустить</SkipButton>
        ) : (
          <Info status={result}>
            {result ? (
              <>
                <div>
                  <StyledCheck />
                </div>
                <div className="text">
                  <h3>Верно</h3>
                </div>
              </>
            ) : (
              <>
                <div>
                  <StyledCross />
                </div>
                <div className="text">
                  <h3>Правильный ответ: {trueAnswer}</h3>
                  <p>Ваш ответ: {answerValue}</p>
                </div>
              </>
            )}
          </Info>
        )}
        <NextButton
          onClick={onCheck}
          disabled={isNil(activeAnswerData.result)}
          className={
            isNil(result) ? `` : `${result ? 'trueAnswer' : 'wrongAnswer'}`
          }
        >
          Далее
        </NextButton>
      </ButtonBar>
    </StyledStatusBar>
  )
}

const mapStateToProps = state => ({
  activeAnswerData: getActiveAnswer(state),
})

const mapDispatchToProps = dispatch => ({
  resetActiveAnswer: () => dispatch(resetActiveAnswer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusBar)
