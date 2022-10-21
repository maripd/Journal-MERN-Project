import Home from './components/Home'
import './App.css'
import peachlogo from './peachlogo.png'

const App = (props) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Home />
      </header>
    </div>
  )
}

export default App
