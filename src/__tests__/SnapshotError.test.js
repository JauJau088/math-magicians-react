import React from 'react';
import renderer from 'react-test-renderer';
import Error from '../pages/Error';

describe('Snapshot test for Error page', () => {
  it('It should render an identical template as the snapshot', () => {
    const ErrorPage = renderer.create(<Error />).toJSON();
    expect(ErrorPage).toMatchSnapshot();
  });
});
