import React from 'react';
import './Calculator.css';
import Button from './CalculatorButton';
import Display from './CalculatorDisplay';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.state = {
    //   total: null,
    //   next: null,
    //   operation: null,
    // };
  }

  calc(btnName) {
    this.setState(calculate(btnName));
  }

  render() {
    return (
      <div className="CalculatorContainer">
        <Display />
        <div className="ButtonsContainer">
          <Button text="AC" callback={this.calc} />
          <Button text="+/-" />
          <Button text="%" />
          <Button text="÷" bgColor="Orange" />
          <Button text="7" />
          <Button text="8" />
          <Button text="9" />
          <Button text="&times;" bgColor="Orange" />
          <Button text="4" />
          <Button text="5" />
          <Button text="6" />
          <Button text="-" bgColor="Orange" />
          <Button text="1" />
          <Button text="2" />
          <Button text="3" />
          <Button text="+" bgColor="Orange" />
          <Button text="0" col="ColTwo" />
          <Button text="." />
          <Button text="=" bgColor="Orange" />
        </div>
      </div>
    );
  }
}

export default Calculator;
