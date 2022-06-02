import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testing user interactions on the main component (App.js).', () => {
  describe('1) When user clicks on Home button', () => {
    it('should render the home page', () => {
      render(<App />);
      userEvent.click(screen.getByRole('link', { name: /home/i }));
      expect(
        screen.getByRole('heading', { name: /welcome to math magicians app!/i }),
      ).toBeInTheDocument();
    });
  });

  describe('2) When the user clicks on Calculator button ', () => {
    it('should render the Calculator page', () => {
      render(<App />);
      userEvent.click(screen.getByRole('link', { name: /calculator/i }));
      expect(screen.getByText(/let's do some math!/i)).toBeInTheDocument();
    });
  });

  describe('3) When the user clicks on Quotes button', () => {
    it('should render the Quotes page', () => {
      render(<App />);
      userEvent.click(screen.getByRole('link', { name: /quotes/i }));
      expect(screen.getByText(/-- /)).toBeInTheDocument();
    });
  });
});
