import React from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'
import Table from 'react-bootstrap/Table'
import { getIllustration } from '../utils'
import { getResultsValue } from '../redux/testing'
import styled from 'styled-components'

const StyledTable = styled(Table)`
  .trueAnswer {
    background-color: #81c784;
  }

  .falseAnswer {
    background-color: #ef5350;
  }

  th {
    text-align: middle;
  }

  td {
    vertical-align: middle;
  }
`

const StyledCellInner = styled.div`
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 400px) {
    font-size: 14pt;
  }
`

const StyledTitle = styled.h3`
  margin-bottom: 15px;
`

const StyledCellInnerIllustration = styled.div`
  text-align: center;
`

const Results = ({ results }) => {
  return (
    <div>
      <StyledTitle>Результаты</StyledTitle>
      <StyledTable responsive bordered size="sm">
        <thead>
          <tr>
            <td>
              <StyledCellInner>Иллюстрация</StyledCellInner>
            </td>
            <td>
              <StyledCellInner>Верный ответ</StyledCellInner>
            </td>
            <td>
              <StyledCellInner>Ваш ответ</StyledCellInner>
            </td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {results.map(
            ({
              answerValue,
              trueAnswer,
              exersiseId,
              result,
              illustration,
              typeOfIllustration,
              customStyles
            }) => (
              <tr key={exersiseId}>
                <td>
                  <div className={get(customStyles, 'result')}>
                    <StyledCellInnerIllustration>
                      {getIllustration(typeOfIllustration, illustration)}
                    </StyledCellInnerIllustration>
                  </div>
                </td>
                <td>
                  <StyledCellInner>{trueAnswer}</StyledCellInner>
                </td>
                <td>
                  <StyledCellInner>{answerValue}</StyledCellInner>
                </td>
                <td className={result ? 'trueAnswer' : 'falseAnswer'}>{'    '}</td>
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
    </div>
  )
}

const mapStateToProps = state => ({
  results: getResultsValue(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
