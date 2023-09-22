// Import necessary modules and functions
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';
import Cell from './Cell';

// Test Board Component
test('Board renders without crashing', () => {
  render(<Board nrows={5} ncols={5} chanceLightStartsOn={0.25} />);
});

// Test Cell Component
test('Cell component toggles onClick', () => {
  const toggleCell = jest.fn();
  const { getByText } = render(<Cell flipCellsAroundMe={toggleCell} isLit={true} />);
  const cell = getByText('');
  
  fireEvent.click(cell);
  expect(toggleCell).toHaveBeenCalledTimes(1);
});