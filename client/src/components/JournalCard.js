import React from 'react'

const JournalCard = (props) => {
  return (
    <li>
      <h4>{props.title}</h4>
      <span>{props.description}</span>
    </li>
  )
}

export default JournalCard
