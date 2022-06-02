import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../pages/Quotes';

describe('Snapshot test for Quotes page', () => {
  it('should render home page identical to the snapshot', () => {
    const quotes = renderer.create(<Quotes />).toJSON();

    // Since the quotes are generated dynamically, we don't need to check the exact match
    // We just need to check if the pattern is the same
    // Uncomment the following to check the why toMatchSnapshot's pattern is built like that
    // console.log('LOG quotes: ', quotes);
    // console.log('LOG CHILDREN: ', quotes.children[0].children[0].children[0]);
    expect(quotes)
      .toMatchSnapshot({ children: [{ children: [{ children: expect.any(Object) }] }] });
  });
});
