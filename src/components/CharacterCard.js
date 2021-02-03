import React from 'react'

export default function CharacterCard(props) {
  return (
    <li className="character-card">
      <div className="character-card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="character-card-content">
        <h3 className="character-card-name">{props.name}</h3>
        <p className="character-card-status">
          <span className={props.status === "Alive" ? "green" : "red"}></span>
          {props.status} - {props.species}
        </p>
        <p className="text-gray">Last known location:</p>
        <p className="character-card-location">{props.location.name}</p>
        <button className="remove-button">Remove</button>
      </div>
    </li>
  )
}
