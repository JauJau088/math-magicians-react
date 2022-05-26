import React, { useState } from 'react';
import './Calculator.css';
import Button from './CalculatorButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  // State hook
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  // Calc function
  const calc = (btnName) => {
    setState(calculate(state, btnName));
  };

  // Display logic
  const { total, next, operation } = state;
  let subShow;
  if (operation == null) {
    subShow = '';
  } else {
    subShow = `${total} ${operation}`;
  }
  let show;
  if (next == null && total == null) {
    //
  } else if (next == null) {
    show = total;
  } else {
    show = next;
  }

  // Render
  return (
    <div className="CalculatorContainer">
      <div className="Display">
        <div className="Display-SubText">{subShow}</div>
        <div className="Display-Text">{show}</div>
      </div>
      <div className="ButtonsContainer">
        <Button text="AC" callback={calc} />
        <Button text="+/-" callback={calc} />
        <Button text="%" callback={calc} />
        <Button text="÷" callback={calc} bgColor="Orange" />
        <Button text="7" callback={calc} />
        <Button text="8" callback={calc} />
        <Button text="9" callback={calc} />
        <Button text="x" callback={calc} bgColor="Orange" />
        <Button text="4" callback={calc} />
        <Button text="5" callback={calc} />
        <Button text="6" callback={calc} />
        <Button text="-" callback={calc} bgColor="Orange" />
        <Button text="1" callback={calc} />
        <Button text="2" callback={calc} />
        <Button text="3" callback={calc} />
        <Button text="+" callback={calc} bgColor="Orange" />
        <Button text="0" callback={calc} col="ColTwo" />
        <Button text="." callback={calc} />
        <Button text="=" callback={calc} bgColor="Orange" />
      </div>
    </div>
  );
};

export default Calculator;
