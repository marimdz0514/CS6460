import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom'
import "../css/Unit.css";

function Unit1() {
  const navigate = useNavigate()

  return (
    <div className="unit-container">
      <Sidebar />
      <div className="unit-content">
        <h1>Unit 1: Introduction</h1>

        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Intro Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <p>This video introduces the goals and structure of the course.</p>
        <button className="next-button" onClick={() => navigate('/unit2')}>
          Continue to Next Lesson
        </button>
      </div>
    </div>
  )
}

export default Unit1