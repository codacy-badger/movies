import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('expect text = movies', () => {
  const { getText } = render(<App />);
  expect(() => getText('movies').toBeInTheDocument());
});
