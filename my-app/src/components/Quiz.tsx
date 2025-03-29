import { useState } from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  quiz: QuizQuestion[];
}

function Quiz({ quiz }: QuizProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleChange = (qIndex: number, selected: string) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: selected }));
  };

  return (
    <div className="quiz-container">
      {quiz.map((q, i) => {
        const userAnswer = answers[i];
        const isCorrect = userAnswer === q.correctAnswer;

        return (
          <div key={i} className="quiz-question">
            <p><strong>{q.question}</strong></p>
            {q.options.map((opt) => (
              <label key={opt} style={{ display: 'block', marginBottom: '4px' }}>
                <input
                  type="radio"
                  name={`question-${i}`}
                  value={opt}
                  checked={userAnswer === opt}
                  onChange={() => handleChange(i, opt)}
                />
                {opt}
              </label>
            ))}
            {userAnswer && (
              <p style={{ color: isCorrect ? 'green' : 'red' }}>
                {isCorrect ? 'Correct ✅' : 'Try again ❌'}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Quiz;