import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-grid">
          <div className="output">
            <div className="current-operand">0</div>
          </div>
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orange-buttton">/</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="orange-buttton">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="orange-buttton">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="orange-buttton">+</button>
          <button type="button" className="span-two">0</button>
          <button type="button">.</button>
          <button type="button" className="orange-buttton">=</button>
        </div>
      </div>
    );
  }
}

// const Calculator = () => (
//   <div className="App">
//     <div className="calculator-grid">
//       <div className="output">
//         <div className="current-operand">0</div>
//       </div>
//       <button type="button">AC</button>
//       <button type="button">+/-</button>
//       <button type="button">%</button>
//       <button type="button" className="orange-buttton">/</button>
//       <button type="button">7</button>
//       <button type="button">8</button>
//       <button type="button">9</button>
//       <button type="button" className="orange-buttton">x</button>
//       <button type="button">4</button>
//       <button type="button">5</button>
//       <button type="button">6</button>
//       <button type="button" className="orange-buttton">-</button>
//       <button type="button">1</button>
//       <button type="button">2</button>
//       <button type="button">3</button>
//       <button type="button" className="orange-buttton">+</button>
//       <button type="button" className="span-two">0</button>
//       <button type="button">.</button>
//       <button type="button" className="orange-buttton">=</button>
//     </div>
//   </div>
// );

export default Calculator;