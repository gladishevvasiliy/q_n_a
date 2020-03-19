import React from 'react'
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap'
import get from 'lodash/get'
import styled from 'styled-components'
import { getIllustration } from '../utils'

const StyledButton = styled(Button)`
  display: block;
  margin-bottom: 4px;
`
const StyledButtonGroup = styled(ButtonGroup)`
  width: 100%;
`
const StyledCol = styled(Col)`
  /* background-color: grey; */
`
const StyledRow = styled(Row)`
  width: 100%;
  /* height: 100%; */
  justify-content: center;
  align-items: center;
`

const StyledQuestion = styled.p`
  font-size: 20pt;
  font-weight: 600;
`

const Exersise = ({ id, value, optionList, onGetAnswer, defaultQuestion }) => {
  const {
    question,
    customStyles,
    typeOfIllustration,
    illustration,
    answer,
  } = value

  const onChecked = (userAnswer, e) => {
    onGetAnswer({
      answerValue: userAnswer,
      trueAnswer: answer,
      result: userAnswer === answer,
      exersiseId: id,
      customStyles,
      illustration,
      typeOfIllustration,
    })
  }
  return (
    <>
      {value && (
        <StyledRow>
          <StyledCol sm={6}>
            <StyledQuestion>
              {question ? question : defaultQuestion}
            </StyledQuestion>
            <div className={get(customStyles, 'illustration')}>
              {getIllustration(typeOfIllustration, illustration)}
            </div>
            <StyledButtonGroup vertical>
              {optionList.map(answer => (
                <StyledButton key={answer} onClick={e => onChecked(answer, e)}>
                  {answer}
                </StyledButton>
              ))}
            </StyledButtonGroup>
          </StyledCol>
        </StyledRow>
      )}
    </>
  )
}

export default Exersise
