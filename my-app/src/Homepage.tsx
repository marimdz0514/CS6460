import { Link } from 'react-router-dom'
import './Homepage.css'

function Homepage() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the Inclusive Care Learning Portal</h1>
        <p className="subtitle">A course on providing affirming care for transgender and nonbinary individuals</p>
      </header>

      <section className="section">
        <h2>🧠 Why This Course Exists</h2>
        <p>
          This course was created to support healthcare providers and students in understanding the unique challenges and
          needs of transgender and nonbinary patients. The goal is to foster empathy, inclusive language, and improve the
          quality of care for all.
        </p>
      </section>

      <section className="section">
        <h2>🗺️ How to Navigate</h2>
        <p>
          Use the left sidebar to explore the units. When you hover over a unit name, a popup will show you all of the lessons
          in that unit. As you complete each lesson, use the <strong>“Continue to Next Lesson”</strong> button at the bottom of
          the page to move forward.
        </p>
      </section>

      <section className="section">
        <h2>📄 Abstract</h2>
        <p>
          This training covers key social, psychological, and clinical concepts necessary for affirming transgender and nonbinary
          healthcare. You’ll explore terminology, patient experiences, identity considerations, and best practices for equitable care.
          Each lesson is short, focused, and designed for both students and practitioners.
        </p>
      </section>

      <Link to="/unit1/1.1">
        <button className="nav-button">Start Course</button>
      </Link>
    </div>
  )
}

export default Homepage