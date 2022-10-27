import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import { useEffect } from 'react'
import './card.css'

const JournalCard = (props) => {
  const navigate = useNavigate()

  const cardHandleClick = () => {
    navigate(`/pageeditor/${props.id}`)
  }
  return (
    <li onClick={cardHandleClick} className="card-color">
      <h4>{props.title}</h4>
      <span>{props.description}</span>
    </li>
  )
}

export default JournalCard
