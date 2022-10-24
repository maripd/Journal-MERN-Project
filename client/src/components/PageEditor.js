import './PageEditor.css'
import { Link } from 'react-router-dom'
import note from './transparent-notebook-20.png'

const PageEditor = () => {
  return (
    <div>
      <div className="page-editor-header">
        <Link to="/" className="back-link">
          Back
        </Link>
        <button className="save-btn">Save</button>
        <button className="delete-btn">Delete</button>
      </div>

      <textarea className="text-area" contentEditable="true"></textarea>
    </div>
  )
}

export default PageEditor
