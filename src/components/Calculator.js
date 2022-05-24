import React from 'react';
import './Calculator.css';
import Button from './CalculatorButton';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button text="AC" />
        <Button text="+/-" />
        <Button text="%" />
        <Button text="÷" bgColor="orange" />
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
        <Button text="&times" bgColor="orange" />
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
        <Button text="-" bgColor="orange" />
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="+" bgColor="orange" />
        <Button text="0" col="2" />
        <Button text="." />
        <Button text="=" bgColor="orange" />
      </div>
    );
  }
}

export default Calculator;
