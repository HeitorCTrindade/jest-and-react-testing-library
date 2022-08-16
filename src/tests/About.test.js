import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('test About Component content', () => {
  test('if page contains Pokédex details', () => {
    renderWithRouter(<About />);
    const firstDetails = screen.getByText(/This application simulates a Pokédex/i);
    const secondDetails = screen.getByText(/One can filter Pokémons by type/i);
    expect(firstDetails).toBeInTheDocument();
    expect(secondDetails).toBeInTheDocument();
  });
  test('if page contains <h2> with text "About Pokédex"', () => {
    renderWithRouter(<About />);
    const headAbout = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(headAbout).toBeInTheDocument();
  });
  test('if page contains two <p> with Pokédex details', () => {
    renderWithRouter(<About />);
    const paragraphsInPage = screen.getAllByText(/Pokémons/i);
    expect(paragraphsInPage.length).toBe(2);
  });
  test('if page contains the correct image', () => {
    renderWithRouter(<About />);
    const expectImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const correctImg = screen.getByRole('img');
    expect(correctImg.src).toBe(expectImage);
  });
});
