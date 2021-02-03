import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterContainer from './components/CharacterContainer';

const baseUrl = 'https://rickandmortyapi.com/api/character/?page=7'

function App() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(baseUrl)
      .then(({data}) => setCharacters(data.results))
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
