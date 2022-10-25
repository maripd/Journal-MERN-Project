import React, { useEffect } from 'react'
import test from './peachlogo.png'
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

const journaldatamock = [
  {
    id: 12345,
    title: 'datatitle',
    description: 'description'
  },
  {
    id: 12345,
    title: 'datatitle1',
    description: 'description1'
  },
  {
    id: 12345,
    title: 'datatitle2',
    description: 'description2'
  }
]

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
    <div>
      <div className="header-container">
        <img src={test} className="logo" alt="peach-img" />
        <Link to="/pageeditor" className="create-btn">
          +
        </Link>
      </div>
      <div className="gallery-container">
        <div className="journal-gallery">
          <ul className="list">
            {currentFetchedValue.map((journalitem) => {
              return (
                <JournalCard
                  title={journalitem.journalTitle}
                  description={journalitem.journalText}
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
