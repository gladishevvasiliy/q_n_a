import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin-bottom: 4px;
`;

const StyledQuestion = styled.p`
  font-size: 16pt;
`;

const Exersise = ({ id, value, optionList, onGetAnswer, defaultQuestion }) => {
  const onChecked = (answer, e) => {
    onGetAnswer({
      answerValue: answer,
      trueAnswer: value.answer,
      result: answer === value.answer,
      exersiseId: id,
      customStyles: value.customStyles,
      illustration: value.illustration
    });
  };
  return (
    <>
      {value && (
        <div>
          <StyledQuestion>{`${
            value.question ? value.question : defaultQuestion
          }`}</StyledQuestion>
          <div
            className={value.customStyles}
            dangerouslySetInnerHTML={{ __html: value.illustration }}
          />
          {/* <p>{`Выберите ответ:`}</p> */}
          <ButtonGroup vertical>
            {optionList.map((answer, index) => (
              <StyledButton key={answer} onClick={e => onChecked(answer, e)}>
                {answer}
              </StyledButton>
            ))}
          </ButtonGroup>
        </div>
      )}
    </>
  );
};

export default Exersise;
