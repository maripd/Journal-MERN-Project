import React from 'react'
import test from './peachlogo.png'
import './Home.css'
import JournalCard from './JournalCard'

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
  return (
    <div>
      <div className="header-container">
        <img src={test} className="logo" />
        <button className="create-btn">+</button>
      </div>
      <div className="gallery-container">
        <div className="journal-gallery">
          <ul className="list">
            {journaldatamock.map((journalitem) => {
              return (
                <JournalCard
                  title={journalitem.title}
                  description={journalitem.description}
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
