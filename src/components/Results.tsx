import React from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { getResultsValue } from "../redux/testing";
import styled from "styled-components";

const StyledTable = styled(Table)`
  .trueAnswer {
    background-color: #81c784;
  }

  .falseAnswer {
    background-color: #ef5350;
  }
`;

const Results = ({ results }) => {
  return (
    <div>
      <StyledTable responsive size="sm">
        <thead>
          <tr>
            <td>Иллюстрация</td>
            <td>Правильный ответ</td>
            <td>Ваш ответ</td>
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
              customStyles
            }) => (
              <tr key={exersiseId}>
                <td>
                  <div
                    className={customStyles}
                    dangerouslySetInnerHTML={{ __html: illustration }}
                  />
                </td>
                <td>{trueAnswer}</td>
                <td>{answerValue}</td>
                <td className={result ? "trueAnswer" : "falseAnswer"}>
                  {"    "}
                </td>
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
    </div>
  );
};

const mapStateToProps = state => ({
  results: getResultsValue(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
