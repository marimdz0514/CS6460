import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import UnitLayout from "../UnitLayout";
import { courseStructure } from "../data/LessonData";
import "../css/Unit.css";
import { Lesson } from "../data/LessonData";
import Quiz from "../components/Quiz";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

function LessonPage() {
  const { unitId, lessonId } = useParams();
  const navigate = useNavigate();

  if (!unitId || !lessonId) return <p>Lesson not found</p>;

  const unit = courseStructure[unitId];
  const lessons = unit?.lessons || [];
  const lessonIndex = lessons.findIndex(
    (lesson: Lesson) => lesson.id === lessonId
  );
  const lesson = lessons[lessonIndex];

  const isLastLesson = lessonIndex === lessons.length - 1;
  const unitKeys = Object.keys(courseStructure);
  const isFinalUnit = unitId === unitKeys[unitKeys.length - 1];
  const isFinalLesson = isFinalUnit && lessonIndex === lessons.length - 1;
  const isFinalExamUnit = unitId === "unit8";

  if (isFinalExamUnit) {
    return (
      <UnitLayout>
        <div className="top-right-home">
          <Link to="/homepage" title="Go to Homepage">
            <AiFillHome size={28} color="#657ec2" />
          </Link>
        </div>
        <div className="content-title">
          <h1>Final Exam</h1>
        </div>
        {unit.quiz ? (
          <div style={{ marginTop: "40px" }}>
            <Quiz quiz={unit.quiz} />
          </div>
        ) : (
          <p>No quiz available.</p>
        )}
      </UnitLayout>
    );
  }

  const nextUnitId = `unit${parseInt(unitId.replace("unit", "")) + 1}`;
  const nextLessonRoute = `/${nextUnitId}/${
    courseStructure[nextUnitId]?.lessons[0]?.id || ""
  }`;

  const handleContinue = () => {
    if (isLastLesson && unit.quiz) {
      navigate(`/${unitId}/quiz`);
    } else {
      navigate(`/${unitId}/${lessons[lessonIndex + 1].id}`);
    }
  };

  const handlePrevious = () => {
    if (lessonIndex > 0) {
      navigate(`/${unitId}/${lessons[lessonIndex - 1].id}`);
    } else {
      const previousUnitNum = parseInt(unitId.replace("unit", "")) - 1;
      const previousUnitId = `unit${previousUnitNum}`;
      const previousUnit = courseStructure[previousUnitId];
      if (previousUnit) {
        const lastLesson =
          previousUnit.lessons[previousUnit.lessons.length - 1];
        navigate(`/${previousUnitId}/${lastLesson.id}`);
      }
    }
  };

  const [showQuiz] = useState(false);

  return (
    <UnitLayout>
      <div className="top-right-home">
        <Link to="/homepage" title="Go to Homepage">
          <AiFillHome size={28} color="#657ec2" />
        </Link>
      </div>
      <div className="content-title">
        <h1>{lesson.title}</h1>
      </div>
      {lesson.videoUrl && (
        <div className="responsive-video">
          <iframe
            src={lesson.videoUrl}
            title={lesson.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {/* 
      {lesson.description && <p>{lesson.description}</p>} */}

      {lesson.content && (
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: lesson.content }}
        />
      )}

      <div className="button-row">
        <button className="prev-button" onClick={handlePrevious}>
          ← Go to Previous Lesson
        </button>

        {!isFinalLesson && !showQuiz && (
          <button className="quiz-button" onClick={handleContinue}>
            {isLastLesson && unit.quiz
              ? "Take Unit Quiz"
              : "Continue to Next Lesson →"}
          </button>
        )}
      </div>
      {showQuiz && unit.quiz && (
        <div style={{ marginTop: "40px" }}>
          <Quiz quiz={unit.quiz} />
          <button
            className="next-button"
            onClick={() => navigate(nextLessonRoute)}
          >
            Go to {courseStructure[nextUnitId]?.title || "Next Unit"}
          </button>
        </div>
      )}
    </UnitLayout>
  );
}

export default LessonPage;
