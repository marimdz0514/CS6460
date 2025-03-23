import { useParams, useNavigate } from 'react-router-dom';
import UnitLayout from '../UnitLayout';
import { courseStructure } from '../data/LessonData';
import '../css/Unit.css';
import { Lesson } from '../data/LessonData';

function LessonPage() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();

  if (!unitId || !lessonId) return <p>Lesson not found</p>;

  const unit = courseStructure[unitId];
  const lessons = unit?.lessons || [];
  const lessonIndex = lessons.findIndex((lesson: Lesson) => lesson.id === lessonId);
  const lesson = lessons[lessonIndex];

  const isLastLesson = lessonIndex === lessons.length - 1;
  const nextUnitId = `unit${parseInt(unitId.replace('unit', '')) + 1}`;
  const nextLessonRoute = isLastLesson
    ? `/${nextUnitId}/${courseStructure[nextUnitId]?.lessons[0]?.id || ''}`
    : `/${unitId}/${lessons[lessonIndex + 1].id}`;

  const buttonLabel = isLastLesson
    ? `${courseStructure[nextUnitId]?.title ? `Unit ${parseInt(nextUnitId.replace('unit', ''))}: ${courseStructure[nextUnitId]?.title}` : 'End of Course'}`
    : `Continue to Next Lesson`;

  return (
    <UnitLayout>
      <h1>{unit.title} - {lesson.title}</h1>

      {lesson.videoUrl && (
        <iframe
          width="100%"
          height="400"
          src={lesson.videoUrl}
          title={lesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {lesson.description && <p>{lesson.description}</p>}

      {nextLessonRoute && (
        <button className="next-button" onClick={() => navigate(nextLessonRoute)}>
          {buttonLabel}
        </button>
      )}
    </UnitLayout>
  );
}

export default LessonPage;