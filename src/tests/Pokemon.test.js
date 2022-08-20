import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import { Pokemon } from '../components';

const expectImage = pokemons[0].image;
const pokemonAltImageText = 'Pikachu sprite';
const favoriteAltImageText = 'Pikachu is marked as favorite';

describe('test Pokemon Component operation', () => {
  test('if Pokemon Card contains the correct image adress (src)', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite={ false }
    />);
    const renderImg = screen.getByAltText(pokemonAltImageText);
    expect(renderImg.src).toBe(expectImage);
  });

  test('if Pokemon Card contains the correct image alt', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite={ false }
    />);
    const renderImg = screen.queryByAltText(`${pokemons[0].name} sprite`);
    expect(renderImg).not.toBe(null);
  });

  test('if Pokemon Card correctly renders favorite pokemon image ', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const renderImg = screen.getByAltText(favoriteAltImageText);
    expect(renderImg.src).toBe('http://localhost/star-icon.svg');
  });

  test('if Pokemon Card contains the correct image favorite alt', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const renderImg = screen.queryByAltText(`${pokemons[0].name} is marked as favorite`);
    expect(renderImg).not.toBe(null);
  });

  test('if Pokemon Card contains the correct type of pokemon', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const pokemonType = screen.queryByTestId('pokemon-type');
    expect(pokemonType.innerHTML).toBe(pokemons[0].type);
  });

  test('if Pokemon Card contains the correct link to details', () => {
    renderWithRouter(<Pokemon
      pokemon={ pokemons[0] }
      isFavorite
    />);
    const pokemonLink = screen.getByRole(
      'link', { name: 'More details' },
    );
    console.log(pokemonLink);
    expect(pokemonLink.href).toBe(`http://localhost/pokemons/${pokemons[0].id}`);
  });
});
