import './PageEditor.css'
import { Link } from 'react-router-dom'
import './transparent-notebook-20.png'
import { useState } from 'react'
import axios from 'axios'

const PageEditor = () => {
  const [currentText, setNewText] = useState('')
  const [currentTitle, setNewTitle] = useState('')
  //const [currentSave, setCurrentSave] = useState('')

  //when save button is clicked, current value is set to updated value
  const handleClick = async () => {
    let response = await axios.post('http://localhost:3001/journalPages', {
      journalTitle: currentTitle,
      journalText: currentText
    })
  }
  //when text is added, it updates current state
  const handleChange = (e) => {
    setNewText(e.target.value)
    console.log(e.target.value, 'noteContent')
  }

  const titleHandleChange = (e) => {
    setNewTitle(e.target.value)
    console.log(e.target.value, 'titleContent')
  }

  return (
    <div>
      <div className="page-editor-header">
        <input
          value={currentTitle}
          onChange={(e) => titleHandleChange(e, 'titleContent')}
          className="note-title"
          placeholder="title of your note"
        ></input>
        <Link to="/" className="back-link">
          Back
        </Link>
        <button onClick={handleClick} className="save-btn">
          Save
        </button>
        <button className="delete-btn">Delete</button>
      </div>

      <textarea
        value={currentText}
        onChange={(e) => handleChange(e, 'noteContent')}
        className="text-area"
      ></textarea>
    </div>
  )
}

export default PageEditor
