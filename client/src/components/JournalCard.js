import React from 'react'
import { useNavigate } from 'react-router-dom'

const JournalCard = (props) => {
  const navigate = useNavigate()

  const cardHandleClick = () => {
    navigate(`/pageeditor/${props.id}`)
  }
  return (
    <li onClick={cardHandleClick}>
      <h4>{props.title}</h4>
      <span>{props.description}</span>
    </li>
  )
}

export default JournalCard
