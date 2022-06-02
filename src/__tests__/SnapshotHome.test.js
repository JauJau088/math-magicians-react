import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Snapshot test for Home page', () => {
  it('should render home page identical to the snapshot', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
  });
});
