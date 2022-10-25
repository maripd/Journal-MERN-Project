import './PageEditor.css'
import { Link } from 'react-router-dom'
import './transparent-notebook-20.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PageEditor = (props) => {
  const [currentText, setNewText] = useState('')
  const [currentTitle, setNewTitle] = useState('')
  const [currentId, setId] = useState('')
  let { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getSpecificId = async () => {
      let response = await axios.get(`http://localhost:3001/getPage/${id}`)
      console.log(response.data.journalItem)
      setNewTitle(response.data.journalItem.journalTitle)
      setNewText(response.data.journalItem.journalText)
      setId(response.data.journalItem._id)
    }
    getSpecificId()
  }, [])

  //when save button is clicked, current value is set to updated value
  const handleClick = async () => {
    //if id exists, call API update, else call API create(post)

    let response = await axios.put(`http://localhost:3001/updatePage/${id}`, {
      journalTitle: currentTitle,
      journalText: currentText
    })
  }
  //when text is added, it updates current text
  const handleChange = (e) => {
    setNewText(e.target.value)
    console.log(e.target.value, 'noteContent')
  }
  //when title is added, it updates current title
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
