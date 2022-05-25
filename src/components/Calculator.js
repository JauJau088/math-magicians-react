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
    this.calc = this.calc.bind(this);
  }

  calc(btnName) {
    // this.setState(calculate(btnName));
    this.setState();
    console.log(btnName);
  }

  render() {
    return (
      <div className="CalculatorContainer">
        <Display />
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
