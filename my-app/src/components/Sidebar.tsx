import { NavLink } from 'react-router-dom';
import { courseStructure } from '../data/LessonData'; // Adjust the import path as necessary
import './Sidebar.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const [hoveredUnit, setHoveredUnit] = useState<string | null>(null);
  const location = useLocation();

  const currentUnit = location.pathname.split('/')[1]; // e.g., unit1

  return (
    <div className="sidebar">
      <h3>Contents</h3>
      <ul>
        {Object.entries(courseStructure).map(([unitId, unit]) => {
          const isOpen = hoveredUnit === unitId || currentUnit === unitId;

          return (
            <li
              key={unitId}
              onMouseEnter={() => setHoveredUnit(unitId)}
              onMouseLeave={() => setHoveredUnit(null)}
              className="unit-item"
            >
              <NavLink to={`/${unitId}/${unit.lessons[0].id}`}>
                {unit.title}
              </NavLink>

              {isOpen && (
                <div className="sub-sidebar">
                  <ul>
                    {unit.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <NavLink
                          to={`/${unitId}/${lesson.id}`}
                          className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                          {lesson.id} {lesson.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;