import { NavLink, useLocation } from "react-router-dom";
import { courseStructure } from "../data/LessonData";
import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const location = useLocation();
  const [openUnit, setOpenUnit] = useState<string | null>(null);

  const toggleUnit = (unitId: string) => {
    setOpenUnit((prev) => (prev === unitId ? null : unitId));
  };

  return (
    <div className="sidebar">
      <h3>Contents</h3>
      <ul>
        {Object.entries(courseStructure).map(([unitId, unit]) => {
          const isOpen = openUnit === unitId;

          return (
            <li key={unitId} className="unit-item">
              <div className="unit-header">
                <button
                  onClick={() => toggleUnit(unitId)}
                  className="toggle-arrow"
                >
                  {isOpen ? "▼" : "▶"}
                </button>
                <NavLink
                  to={
                    unitId === "unit8"
                      ? `/${unitId}/quiz` // Direct to Final Exam for Unit 8
                      : `/${unitId}/${unit.lessons[0]?.id || ""}` // Normal for other units
                  }
                  className="unit-link"
                >
                  {unit.title}
                </NavLink>
              </div>

              {/* ✅ This renders the lesson list only if open */}
              {isOpen && (
                <ul className="sub-sidebar">
                  {unit.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <NavLink
                        to={`/${unitId}/${lesson.id}`}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {lesson.title}
                      </NavLink>
                    </li>
                  ))}
                  {unit.quiz && (
                    <li key={`${unitId}-quiz`}>
                      <NavLink
                        to={`/${unitId}/quiz`}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        📘 Quiz
                      </NavLink>
                    </li>
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
