import React from 'react';
import './Calculator.css';
import Calc from '../components/Calculator';

const Calculator = () => {
  const calculatorData = {
    title: 'Calculator!',
    subTitle: 'Lets do some math!',
  };

  const Page = () => {
    const { title, subTitle } = calculatorData;
    return (
      <>
        <div className="contentCalculator">
          <div className="title">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
          </div>
          <div className="calculator">
            <Calc />
          </div>
        </div>
      </>
    );
  };
  return (
    <Page />
  );
};

export default Calculator;
