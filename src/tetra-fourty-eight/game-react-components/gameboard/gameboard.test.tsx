import React from 'react';
import { render, screen } from '@testing-library/react';
import GameBoard from './gameboard';

test('renders learn react link', () => {
    render(<GameBoard />);
    const linkElement = screen.getByText(/GameBoard/i);
    expect(linkElement).toBeInTheDocument();
});
