import { Link } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <header>
        <h1> CS6460: Educational Technology</h1>
      </header>

      <section className="section">
        <h2>Purpose</h2>
        <p>
          The purpose of this course is to empower young girls from underserved
          communities with foundational coding skills through an engaging,
          beginner-friendly Python curriculum. By combining interactive lessons,
          storytelling, real-world applications, and mentorship from female
          engineers, the program aims to build students’ confidence, curiosity,
          and problem-solving abilities in STEM. The course is designed to be
          accessible, culturally relevant, and inspiring—helping bridge the
          gender gap in tech while fostering a supportive learning environment
          where every student can thrive.
        </p>
      </section>

      <section className="section">
        <h2>Research</h2>
        <p>
          This curriculum is informed by research on effective STEM education
          for underrepresented groups, with a specific focus on young girls from
          underserved communities. Studies show that early exposure to coding,
          when combined with mentorship and culturally relevant content,
          increases retention, engagement, and confidence among
          female-identifying students in technology fields. Programs such as
          Girls Who Code and Code.org have demonstrated success through hands-on
          projects, accessible platforms, and storytelling—models which this
          curriculum expands upon by integrating guest speakers and real-world
          applications. Educational theories such as Vygotsky’s Zone of Proximal
          Development (ZPD) and active learning strategies were used to scaffold
          lesson complexity and ensure students are consistently challenged and
          supported. By designing content for a browser-based coding platform
          like Trinket, the course removes technical barriers, allowing
          equitable access regardless of prior experience or resources.
        </p>
      </section>

      <section className="section">
        <h2>Content Overview:</h2>
        <ul
          style={{ textAlign: "left", lineHeight: "1.8", paddingLeft: "20px" }}
        >
          <li>
            <strong>Unit 1: Introduction to Python and Trinket</strong>
            <br />
            Write your first print statements, add comments, use variables, and
            read input from users.
          </li>
          <li>
            <strong>Unit 2: Data Types</strong>
            <br />
            Understand strings, numbers, booleans, perform operations,
            manipulate text, and handle type conversions.
          </li>
          <li>
            <strong>Unit 3: Conditional Statements</strong>
            <br />
            Use <code>if</code>, <code>elif</code>, and <code>else</code> to
            write programs that make decisions, with logical operators and
            nested conditions.
          </li>
          <li>
            <strong>Unit 4: Loops</strong>
            <br />
            Learn about <code>for</code> and <code>while</code> loops, nesting,
            and using loops to automate tasks.
          </li>
          <li>
            <strong>Unit 5: Data Structures</strong>
            <br />
            Work with lists, tuples, and sets—explore indexing, slicing,
            immutability, and basic set operations.
          </li>
          <li>
            <strong>Unit 6: Functions</strong>
            <br />
            Create reusable code with functions, explore parameters and return
            values, and use Python’s built-in functions.
          </li>
          <li>
            <strong>Unit 7: Coding with Turtle</strong>
            <br />
            Students will learn to use the Turtle graphics library to create
            visual art and animations, applying their coding skills in a fun and
            creative way.
          </li>
          <li>
            <strong>Unit 8: Final Exam</strong>
            <br />
            Ungraded: Final Exam
          </li>
          <li>
            <strong>References:</strong>
            <br />
            Python Land. (n.d.). Python tutorial: Learn Python programming from
            scratch. Retrieved April 27, 2025, from
            <a href="https://python.land/python-tutorial" target="_blank">
              https://python.land/python-tutorial
            </a>
            <br />
            <br />
            Nuevo Foundation. (n.d.). Making technology education accessible for
            all. Retrieved April 27, 2025, from
            <a href="https://nuevofoundation.org/" target="_blank">
              https://nuevofoundation.org/
            </a>
          </li>
        </ul>
      </section>

      <Link to="/unit1/1.1">
        <button className="nav-button">Start Course</button>
      </Link>
    </div>
  );
}

export default Homepage;
