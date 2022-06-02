import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Snapshot test for Calculator page', () => {
  it('It should render an identical template', () => {
    const CalculatorPage = renderer.create(<Calculator />).toJSON();
    expect(CalculatorPage).toMatchSnapshot();
  });
});
