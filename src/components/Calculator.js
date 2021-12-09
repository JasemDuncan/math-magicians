import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: 0,
    };

    this.click = this.click.bind(this);
  }

  click(event) {
    this.setState((obj) => calculate(obj, event.target.innerText));
  }

  render() {
    let lblValue = 0;
    const { total, next } = this.state;
    if (next) {
      lblValue = next;
    } else if (total) {
      lblValue = total;
    }

    return (
      <div className="App">
        <div className="calculator-grid">
          <div className="output">
            <div className="current-operand">{lblValue}</div>
          </div>
          <button type="button" onClick={this.click}>AC</button>
          <button type="button" onClick={this.click}>+/-</button>
          <button type="button" onClick={this.click}>%</button>
          <button type="button" onClick={this.click} className="orange-buttton">/</button>
          <button type="button" onClick={this.click}>7</button>
          <button type="button" onClick={this.click}>8</button>
          <button type="button" onClick={this.click}>9</button>
          <button type="button" onClick={this.click} className="orange-buttton">x</button>
          <button type="button" onClick={this.click}>4</button>
          <button type="button" onClick={this.click}>5</button>
          <button type="button" onClick={this.click}>6</button>
          <button type="button" onClick={this.click} className="orange-buttton">-</button>
          <button type="button" onClick={this.click}>1</button>
          <button type="button" onClick={this.click}>2</button>
          <button type="button" onClick={this.click}>3</button>
          <button type="button" onClick={this.click} className="orange-buttton">+</button>
          <button type="button" onClick={this.click} className="span-two">0</button>
          <button type="button" onClick={this.click}>.</button>
          <button type="button" onClick={this.click} className="orange-buttton">=</button>
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
