import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { Pokedex } from '../pages';

import pokemons from '../data';

const pokemonsTypes = [
  'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
const testIdPokemonName = 'pokemon-name';

describe('test Pokedex Component operation', () => {
  test('if when accessing a page that contains <h2> "Encountered pokémons"', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />);
    const PokedexSubTitle = screen
      .getByRole('heading', { name: 'Encountered pokémons', level: 2 });
    expect(PokedexSubTitle).toBeInTheDocument();
  });
  test('if the "next Pokemon" button works correctly', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />);
    const firstPokemonShowed = 'Pikachu';
    const buttonNextPokemon = screen
      .getByRole('button', { name: 'Próximo pokémon' });
    expect(buttonNextPokemon).toBeInTheDocument();
    let actualPokemon = screen.queryByTestId(testIdPokemonName);
    expect(actualPokemon.innerHTML).toBe(firstPokemonShowed);
    fireEvent.click(buttonNextPokemon);
    actualPokemon = screen.queryByTestId(testIdPokemonName);
    expect(actualPokemon.innerHTML).toBe('Charmander');
  });
  test('test if only one pokemon appears at a time', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />);
    const buttonNextPokemon = screen
      .getByRole('button', { name: 'Próximo pokémon' });
    let arrayPokemonsInPage = screen.queryAllByTestId(testIdPokemonName);
    expect(arrayPokemonsInPage.length).toBe(1);
    fireEvent.click(buttonNextPokemon);
    arrayPokemonsInPage = screen.queryAllByTestId(testIdPokemonName);
    expect(arrayPokemonsInPage.length).toBe(1);
  });
  test('test if Pokedex have correct filters buttons', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />);
    const arrayFilterButton = screen.queryAllByTestId('pokemon-type-button');
    expect(arrayFilterButton[0].innerHTML).toBe(pokemonsTypes[0]);
    expect(arrayFilterButton[1].innerHTML).toBe(pokemonsTypes[1]);
    expect(arrayFilterButton[2].innerHTML).toBe(pokemonsTypes[2]);
    expect(arrayFilterButton[3].innerHTML).toBe(pokemonsTypes[3]);
    expect(arrayFilterButton[4].innerHTML).toBe(pokemonsTypes[4]);
    expect(arrayFilterButton[5].innerHTML).toBe(pokemonsTypes[5]);
    expect(arrayFilterButton[6].innerHTML).toBe(pokemonsTypes[6]);
  });

  test('test if Pokedex button "all" is clickable', () => {
    renderWithRouter(<Pokedex pokemons={ pokemons } isPokemonFavoriteById={ {} } />);
    const buttonFilterAll = screen.getByRole('button', { name: 'All' });
    buttonFilterAll.onclick = jest.fn(() => 'ok');
    fireEvent.click(buttonFilterAll);
  });
});
