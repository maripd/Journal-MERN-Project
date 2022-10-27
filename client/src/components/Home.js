import React, { useEffect } from 'react'
import './Home.css'
import JournalCard from './JournalCard'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

// when page loads
// axios fetch journal pages from api
// api get from db
// axios return response as js array of objects
// in react component map the array and render <Card>

const Home = (props) => {
  const [currentFetchedValue, setFetchedValue] = useState([])

  useEffect(() => {
    const getAllPages = async () => {
      let response = await axios.get('http://localhost:3001/journalAllPages')
      setFetchedValue(response.data.allPages)
    }

    getAllPages()
  }, [])

  return (
    <div className="main-container">
      <div className="header-container">
        <h2 className="logo">Notepad</h2>
        <Link to="/pageeditor" className="create-btn">
          Create+
        </Link>
      </div>
      <div className="gallery-container">
        <div className="journal-gallery">
          <ul className="list">
            {currentFetchedValue.map((journalItem) => {
              console.log(journalItem)
              return (
                <JournalCard
                  title={journalItem.journalTitle}
                  description={journalItem.journalText}
                  id={journalItem._id}
                  dateCreated={journalItem.createdAt}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
