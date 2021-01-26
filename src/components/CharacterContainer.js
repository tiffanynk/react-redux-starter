import React from 'react'
import CharacterCard from './CharacterCard'

export default function CharacterContainer({characters}) {

  const characterCards = () => characters.map(character => {
    return <CharacterCard key={character.id} {...character} />
  })

  return (
    <ul className="character-list">
      {characterCards()}
    </ul>
  )
}
