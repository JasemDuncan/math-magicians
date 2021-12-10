import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [input, setInput] = useState({
    total: 0,
    next: 0,
  });

  const outPut = (value) => {
    const finalResultState = calculate(input, value);
    setInput(finalResultState);
  };

  const click = (event) => {
    const btnTextValue = event.target.innerText;
    outPut(btnTextValue);
  };

  let lblValue = 0;

  if (input.next) {
    lblValue = input.next;
  } else if (input.total) {
    lblValue = input.total;
  }

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">{lblValue}</div>
        </div>
        <button type="button" onClick={click}>AC</button>
        <button type="button" onClick={click}>+/-</button>
        <button type="button" onClick={click}>%</button>
        <button type="button" onClick={click} className="orange-buttton">&divide;</button>
        <button type="button" onClick={click}>7</button>
        <button type="button" onClick={click}>8</button>
        <button type="button" onClick={click}>9</button>
        <button type="button" onClick={click} className="orange-buttton">x</button>
        <button type="button" onClick={click}>4</button>
        <button type="button" onClick={click}>5</button>
        <button type="button" onClick={click}>6</button>
        <button type="button" onClick={click} className="orange-buttton">-</button>
        <button type="button" onClick={click}>1</button>
        <button type="button" onClick={click}>2</button>
        <button type="button" onClick={click}>3</button>
        <button type="button" onClick={click} className="orange-buttton">+</button>
        <button type="button" onClick={click} className="span-two">0</button>
        <button type="button" onClick={click}>.</button>
        <button type="button" onClick={click} className="orange-buttton">=</button>
      </div>
    </div>
  );
};
export default Calculator;
