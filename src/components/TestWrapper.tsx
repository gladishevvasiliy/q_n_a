import React from "react";
import { useParams } from "react-router-dom";
import Test from "./Test";

const TestWrapper = () => {
  const { testId } = useParams();
  return <Test id={testId} />;
};

export default TestWrapper;
