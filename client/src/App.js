import Home from './components/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import PageEditor from './components/PageEditor'

const App = (props) => {
  return (
    <div className="app-container">
      <header className="app-header"> </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pageeditor/" element={<PageEditor />} />
        <Route path="/pageeditor/:id" element={<PageEditor />} />
      </Routes>
    </div>
  )
}

export default App
