import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import get from 'lodash/get'
import styled from 'styled-components'
import { getIllustration } from '../utils'
import { StyledButton } from './Styles'
import { setActiveAnswer, getActiveAnswer, setAnswer } from '../redux/testing'

const AnswerButtonList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const StyledCol = styled(Col)``
const StyledRow = styled(Row)`
  width: 80%;
  justify-content: center;
  align-items: center;
`

const StyledQuestion = styled.p`
  font-size: 22pt;
  font-weight: 600;
  margin-bottom: 5rem;
`

const Exersise = ({
  id,
  value,
  optionList,
  setActiveAnswer,
  setAnswer,
  defaultQuestion,
  activeAnswerData,
}) => {
  const {
    question,
    customStyles,
    typeOfIllustration,
    illustration,
    answer,
  } = value

  const { answerValue } = activeAnswerData
  const onChecked = (userAnswer, e) => {
    const answerData = {
      answerValue: userAnswer,
      trueAnswer: answer,
      result: userAnswer === answer,
      exersiseId: id,
      customStyles,
      illustration,
      typeOfIllustration,
    }
    setAnswer(answerData)
    setActiveAnswer(answerData)
  }
  return (
    <>
      {value && (
        <StyledRow>
          <StyledCol>
            <StyledQuestion>
              {question ? question : defaultQuestion}
            </StyledQuestion>
            <div className={get(customStyles, 'illustration')}>
              {getIllustration(typeOfIllustration, illustration)}
            </div>
            <AnswerButtonList>
              {optionList.map(answer => (
                <StyledButton
                  key={answer}
                  active={answerValue === answer}
                  onClick={e => onChecked(answer, e)}
                >
                  {answer}
                </StyledButton>
              ))}
            </AnswerButtonList>
          </StyledCol>
        </StyledRow>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  activeAnswerData: getActiveAnswer(state),
})

const mapDispatchToProps = dispatch => ({
  setActiveAnswer: data => dispatch(setActiveAnswer(data)),
  setAnswer: answerData => dispatch(setAnswer(answerData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Exersise)
