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

const StyledQuestion = styled.p`
  font-size: 16pt;
`

const Exersise = ({ id, value, optionList, onGetAnswer, defaultQuestion }) => {
  const { question, customStyles, typeOfIllustration, illustration, answer } = value

  const onChecked = (userAnswer, e) => {
    onGetAnswer({
      answerValue: userAnswer,
      trueAnswer: answer,
      result: userAnswer === answer,
      exersiseId: id,
      customStyles,
      illustration,
      typeOfIllustration
    })
  }
  return (
    <>
      {value && (
        <Row>
          <Col sm={6}>
            <div className={get(customStyles, 'illustration')}>
              {getIllustration(typeOfIllustration, illustration)}
            </div>
          </Col>
          <Col sm={6}>
            <StyledQuestion>{question ? question : defaultQuestion}</StyledQuestion>

            <StyledButtonGroup vertical>
              {optionList.map(answer => (
                <StyledButton key={answer} onClick={e => onChecked(answer, e)}>
                  {answer}
                </StyledButton>
              ))}
            </StyledButtonGroup>
          </Col>
        </Row>
      )}
    </>
  )
}

export default Exersise
