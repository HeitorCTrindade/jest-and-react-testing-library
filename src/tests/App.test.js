import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('test App Component operation', () => {
  test('if header contains links Home, About and Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const favoritePokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritePokemonsLink).toBeInTheDocument();
  });
  test('if clicking on the home link redirects to the root("/")of the page', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });
  test('if clicking on the Favorite Pokémons link redirects to "/about" page', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: 'About' });
    fireEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
  });
  test('if clicking on the home link redirects to the "/favorites" page', () => {
    const { history } = renderWithRouter(<App />);
    const favoritePokemonsLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    fireEvent.click(favoritePokemonsLink);
    expect(history.location.pathname).toBe('/favorites');
  });
  test('if when accessing a page that does not exist shows not found message', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    const notFoundMessage = screen.getByRole('heading', { name: /not found/i, level: 2 });
    expect(notFoundMessage).toBeInTheDocument();
  });
});
