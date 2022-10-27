import './PageEditor.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import stickers from './stickerObj'

const PageEditor = (props) => {
  const [currentText, setNewText] = useState('')
  const [currentTitle, setNewTitle] = useState('')
  const [currentStickers, setStickers] = useState([])
  const [currentMenuState, setMenuState] = useState(false)
  const [currentId, setId] = useState('')
  const navigate = useNavigate()
  let { id } = useParams()

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
    //if id does not exist, call API post, else call API http request put)
    if (id === undefined) {
      let response = await axios.post('http://localhost:3001/journalPages', {
        journalTitle: currentTitle,
        journalText: currentText
      })
    } else {
      let response = await axios.put(`http://localhost:3001/updatePage/${id}`, {
        journalTitle: currentTitle,
        journalText: currentText
      })
    }
  }

  const deleteHandleClick = async () => {
    let response = await axios.delete(`http://localhost:3001/deletePage/${id}`)
    navigate('/')
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

  const menuHandleClick = (e) => {
    //when clicked, set state
    if (currentMenuState === false) {
      setMenuState(true)
    } else {
      setMenuState(false)
    }
  }
  console.log(currentMenuState)
  let panelDisplay = 'hide'
  if (currentMenuState === true) {
    panelDisplay = ''
  }

  const stickerHandleClick = (stickerKeyItem) => {
    console.log(stickerKeyItem)
    //destructure: update currentStickers and add stickerKeyItem
    setStickers([...currentStickers, stickers[stickerKeyItem]])
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
        <button onClick={deleteHandleClick} className="delete-btn">
          Delete
        </button>
      </div>

      <div className="sticker-container">
        <div className="sticker-area">
          {currentStickers.map((stickerItem) => {
            return (
              <img
                src={stickerItem}
                style={{ width: '40px', height: '40px', margin: 'auto 10px' }}
              />
            )
          })}
        </div>

        <button onClick={menuHandleClick} className="addstickers-btn">
          +
        </button>
        <div className={`dropdown-panel ${panelDisplay}`}>
          {Object.keys(stickers).map((stickerKeyItem) => {
            // console.log(stickerKeyItem)
            return (
              <img
                onClick={(e) => {
                  stickerHandleClick(stickerKeyItem)
                }}
                className="sticker-img"
                src={stickers[stickerKeyItem]}
              />
            )
          })}
        </div>
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
