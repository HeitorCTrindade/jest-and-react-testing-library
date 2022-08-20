import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { PokemonDetails } from '../pages';

import pokemons from '../data';

const mockPokemon = pokemons[0];

const onUpdateFavoritePokemons = () => {};
const mockMatch = { params: { id: (mockPokemon.id).toString() } };
const mockIsPokemonFavoriteById = { 10: false, 25: true };

describe('test PokemonDetails Component operation', () => {
  test('if PokemonDetails Card contains the <h2> with "pokemon name" Details', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getByRole(
      'heading', { name: `${mockPokemon.name} Details`, level: 2 },
    );
    expect(expectComponent).toBeInTheDocument();
  });
  test('if PokemonDetails Card contains the <h2> with "Summary"', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getByRole(
      'heading', { name: 'Summary', level: 2 },
    );
    expect(expectComponent).toBeInTheDocument();
  });
  test('if PokemonDetails Card contains the "Summary" of pokemon', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getByText(/This intelligent Pokémon/i);
    expect(expectComponent).toBeInTheDocument();
  });
  test('if PokemonDetails contains the <h2> with "Game Locations of "pokemon"', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getByRole(
      'heading', { name: `Game Locations of ${mockPokemon.name}`, level: 2 },
    );
    expect(expectComponent).toBeInTheDocument();
  });
  test('if PokemonDetails contains the <h2> with "Game Locations of "pokemon"', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getAllByRole(
      'img', { name: `${mockPokemon.name} location` },
    );
    expect(expectComponent.length).toBe(mockPokemon.foundAt.length);
    for (let index = 0; index < expectComponent.length; index += 1) {
      expect(expectComponent[index].src).toEqual(mockPokemon.foundAt[index].map);
    }
  });
  test('if PokemonDetails Card contains the text "Summary"', () => {
    renderWithRouter(<PokemonDetails
      pokemons={ pokemons }
      match={ mockMatch }
      isPokemonFavoriteById={ mockIsPokemonFavoriteById }
      onUpdateFavoritePokemons={ onUpdateFavoritePokemons }
    />);
    const expectComponent = screen.getByLabelText('Pokémon favoritado?');
    expect(expectComponent).toBeInTheDocument();
  });
});
