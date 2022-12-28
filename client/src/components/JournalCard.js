import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card.css'
const BASE_URL = 'https://marijobtracker.herokuapp.com'

const JournalCard = (props) => {
  const navigate = useNavigate()

  const cardHandleClick = () => {
    navigate(`${BASE_URL}/pageeditor/${props.id}`)
  }

  return (
    <li
      onClick={cardHandleClick}
      className="card-color"
      style={{ backgroundColor: props.journalColor }}
    >
      <h4>{props.title}</h4>
      <span>{props.description}</span>
    </li>
  )
}

export default JournalCard
