import React from 'react';
import './Calculator.css';
import Button from './CalculatorButton';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.calc = this.calc.bind(this);
  }

  calc(btnName) {
    const temp = { ...this.state };
    this.setState(calculate(temp, btnName));
  }

  render() {
    const { total, next } = this.state;
    let show;
    if (next === null && total === null) {
      show = '0';
    } else if (next === null) {
      show = total;
    } else {
      show = next;
    }

    return (
      <div className="CalculatorContainer">
        <div className="Display">
          <div className="Display-Text">{show}</div>
        </div>
        <div className="ButtonsContainer">
          <Button text="AC" callback={this.calc} />
          <Button text="+/-" callback={this.calc} />
          <Button text="%" callback={this.calc} />
          <Button text="÷" callback={this.calc} bgColor="Orange" />
          <Button text="7" callback={this.calc} />
          <Button text="8" callback={this.calc} />
          <Button text="9" callback={this.calc} />
          <Button text="x" callback={this.calc} bgColor="Orange" />
          <Button text="4" callback={this.calc} />
          <Button text="5" callback={this.calc} />
          <Button text="6" callback={this.calc} />
          <Button text="-" callback={this.calc} bgColor="Orange" />
          <Button text="1" callback={this.calc} />
          <Button text="2" callback={this.calc} />
          <Button text="3" callback={this.calc} />
          <Button text="+" callback={this.calc} bgColor="Orange" />
          <Button text="0" callback={this.calc} col="ColTwo" />
          <Button text="." callback={this.calc} />
          <Button text="=" callback={this.calc} bgColor="Orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
