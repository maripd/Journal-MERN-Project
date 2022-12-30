import './PageEditor.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import stickers from './stickerObj'

const colorArray = [
  '#e3dbca',
  '#95bab6',
  '#95acba',
  '#cca793',
  '#c29396',
  '#728c88',
  '#c9c9b9',
  '#b59264',
  '#cfc8c0',
  '#e0e6d3'
]

const PageEditor = (props) => {
  const [currentText, setNewText] = useState('')
  const [currentTitle, setNewTitle] = useState('')
  const [currentUserStickers, setUserStickers] = useState([])
  const [currentMenuState, setMenuState] = useState(false)
  const [currentAllStickers, setAllStickers] = useState([])
  const [currentClickState, setClickState] = useState(false)
  const BASE_URL = 'https://marinotepad.herokuapp.com'
  const navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      //get all stickers
      let stickerResponse = await axios.get('/getStickers')
      console.log(stickerResponse.data)
      //if id exists, populate title and text
      if (id !== undefined) {
        let response = await axios.get(`${BASE_URL}/getPage/${id}`)
        console.log(response.data.journalItem)
        setNewTitle(response.data.journalItem.journalTitle)
        setNewText(response.data.journalItem.journalText)
        setUserStickers(response.data.journalItem.journalStickers || [])
      }
      setAllStickers(stickerResponse.data.allStickers)
    }
    getData()
  }, [])
  console.log(currentAllStickers)
  //when save button is clicked, current value is set to updated value
  const handleClick = async () => {
    //if id does not exist, call API post, else call API http request put)
    if (id === undefined) {
      //create a random number, use random num to get random color, and then assign to journalColor.
      const randomNumber = Math.floor(Math.random() * colorArray.length)
      console.log(randomNumber)
      const randomColor = colorArray[randomNumber]

      let response = await axios.post(`${BASE_URL}/journalPages`, {
        journalTitle: currentTitle,
        journalText: currentText,
        journalStickers: currentUserStickers,
        journalColor: randomColor
      })
      navigate('/')
    } else {
      let response = await axios.put(`${BASE_URL}/updatePage/${id}`, {
        journalTitle: currentTitle,
        journalText: currentText,
        journalStickers: currentUserStickers
      })
      navigate('/')
    }
  }

  const deleteHandleClick = async () => {
    let response = await axios.delete(`${BASE_URL}/deletePage/${id}`)
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

  const stickerHandleClick = (stickerItem) => {
    console.log(stickerItem)
    //destructure: update currentUserStickers and add stickerKeyItem
    setUserStickers([...currentUserStickers, stickerItem._id])
  }

  return (
    <div>
      <div className="page-editor-header">
        <div className="titleinput-container">
          <input
            value={currentTitle}
            onChange={(e) => titleHandleChange(e, 'titleContent')}
            className="note-title"
            placeholder="title of your note"
          ></input>
        </div>
        <div className="buttons-container">
          <Link to="/" className="link-tag">
            <button className="back-link">Back</button>
          </Link>
          <button onClick={handleClick} className="save-btn">
            Save
          </button>
          <button onClick={deleteHandleClick} className="delete-btn">
            Delete
          </button>
        </div>
      </div>

      <div className="sticker-container">
        <div className="sticker-area">
          {currentUserStickers.map((stickerId) => {
            //look for the sticker object that matches the sticker id
            const findStickerObj = currentAllStickers.find((stickerObj) => {
              return stickerObj._id === stickerId
            })
            return (
              <img
                src={stickers[findStickerObj.name]}
                style={{ width: '40px', height: '40px', margin: 'auto 10px' }}
              />
            )
          })}
        </div>
        <div className="stickerbtn-container">
          <button onClick={menuHandleClick} className="addstickers-btn">
            +
          </button>
        </div>
        <div className={`dropdown-panel ${panelDisplay}`}>
          {currentAllStickers.map((stickerItem) => {
            return (
              <img
                onClick={(e) => {
                  stickerHandleClick(stickerItem)
                }}
                className="sticker-img"
                src={stickers[stickerItem.name]}
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
