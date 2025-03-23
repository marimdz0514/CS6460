import { useParams, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
import UnitLayout from '../UnitLayout';
import { courseStructure } from  '../data/LessonData';
import '../css/Unit.css';
import '../components/Sidebar.css';

function LessonPage() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();

  if (!unitId || !lessonId) return <p>Lesson not found</p>;

  const unit = courseStructure[unitId];
  const lessons = unit?.lessons || [];
  const lessonIndex = lessons.findIndex((lesson) => lesson.id === lessonId);
  const isLastLesson = lessonIndex === lessons.length - 1;

  const nextUnitId = `unit${parseInt(unitId.replace('unit', '')) + 1}`;
  const nextLessonRoute = isLastLesson
    ? `/${nextUnitId}/${courseStructure[nextUnitId]?.lessons[0]?.id}`
    : `/${unitId}/${lessons[lessonIndex + 1].id}`;

  const buttonLabel = isLastLesson
    ? `${nextUnitId.charAt(0).toUpperCase() + nextUnitId.slice(1)}: ${courseStructure[nextUnitId]?.title}`
    : `Continue to Next Lesson`;

    return (
        <UnitLayout>
          <h1>{unit.title} - {lessons[lessonIndex].title}</h1>
          <p>This is content for {lessonId}</p>
          <button onClick={() => navigate(nextLessonRoute)}>{buttonLabel}</button>
        </UnitLayout>
      );
    }
export default LessonPage;