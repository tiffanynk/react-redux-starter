import './App.css';
import { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import CharacterContainer from './components/CharacterContainer';

const baseUrl = 'https://rickandmortyapi.com/api/character/?page=7'

function App({setCharacters, characters}) {

  useEffect(() => {
    axios.get(baseUrl)
    .then(({data}) => setCharacters(data.results))
  }, [])

  return (
    <div className='App'>
      <section className="heading">
        <h1>The Rick and Morty API</h1>
        <h2>Using Hooks with React-Redux</h2>
      </section>
      <CharacterContainer characters={characters} />
    </div>
  );
}

const mapStateToProps = ({characters}) => ({
  characters
})

const mapDispatchToProps = (dispatch) => ({
  setCharacters: (characters) => {
    dispatch({
      type: 'SET_CHARACTERS',
      characters
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
