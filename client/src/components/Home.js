const Home = (props) => {
  return (
    <div>
      <div className="header-container">
        <img src={props.logoImage} className="logo" />
        <button className="create-btn">{props.plusSign}</button>
      </div>
      <div className="gallery-container">
        <div className="journal-gallery">{props.journalItems}</div>
      </div>
    </div>
  )
}

export default Home
