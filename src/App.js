import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterContainer from './components/CharacterContainer';
import { useSelector, useDispatch } from 'react-redux';
import types from './Redux/types';
import { SET_CHARACTERS } from './Redux/types/characters';

const baseUrl = 'https://rickandmortyapi.com/api/character/?page=7'

function App() {

  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)

  useEffect(() => {
    axios.get(baseUrl)
      .then(({data}) => dispatch({
        type: SET_CHARACTERS,
        characters: data.results
      }))
  }, [])

  return (
    <div className='App'>
      <section className="heading">
        <h1>The Rick and Morty API</h1>
        <h2>Using React-Redux</h2>
      </section>
      <CharacterContainer characters={characters} />
    </div>
  );
}


export default App;
