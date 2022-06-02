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

      expect(screen.getByRole('heading', { name: /welcome to math magicians app!/i }))
        .toBeInTheDocument();
    });
  });
});
