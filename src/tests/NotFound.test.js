import React from 'react';
import { screen } from '@testing-library/react';
import { NotFound } from '../pages';
import renderWithRouter from '../renderWithRouter';

const expectImage = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
const altImageText = 'Pikachu crying because the page requested was not found';

describe('test NotFound Component operation', () => {
  test('if page does not exist, shows not found message and image', () => {
    renderWithRouter(<NotFound />);
    const notFoundMessage = screen.getByRole('heading', { name: /not found/i, level: 2 });
    expect(notFoundMessage).toBeInTheDocument();
    const correctImg = screen.getByAltText(altImageText);
    expect(correctImg).toBeInTheDocument();
  });

  test('if page contains the correct image notFound', () => {
    renderWithRouter(<NotFound />);
    const correctImg = screen.getByAltText(altImageText);
    expect(correctImg.src).toBe(expectImage);
  });
});
