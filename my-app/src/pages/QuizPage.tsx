import { useParams, useNavigate } from 'react-router-dom';
import { courseStructure } from '../data/LessonData';
import Quiz from '../components/Quiz';
import UnitLayout from '../UnitLayout';

function QuizPage() {
  const { unitId } = useParams();
  const navigate = useNavigate();

  const unit = courseStructure[unitId || ''];
  const nextUnitId = `unit${parseInt(unitId?.replace('unit', '') || '0') + 1}`;
  const nextLessonRoute = `/${nextUnitId}/${courseStructure[nextUnitId]?.lessons[0]?.id || ''}`;

  if (!unit || !unit.quiz) {
    return <p>Quiz not found.</p>;
  }

  return (
    <UnitLayout>
      <h1>{unit.title} - Quiz</h1>
      <Quiz quiz={unit.quiz} />
      <button className="next-button" onClick={() => navigate(nextLessonRoute)}>
        Go to {courseStructure[nextUnitId]?.title || 'Next Unit'}
      </button>
    </UnitLayout>
  );
}

export default QuizPage;