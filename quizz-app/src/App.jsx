import { useEffect, useState } from 'react';
import questionsData from '../data.json';
import './App.css';
import Question from './components/Question';
import Results from './components/Results';

function App() {
  const [questions, setQuestions] = useState(questionsData);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (
      answers.length === questions.length ||
      questionIndex === questions.length
    )
      setShowResults(true);
  }, [answers, questions, questionIndex]);

  return (
    <>
      {!showResults && questions[questionIndex] !== undefined ? (
        <Question
          question={questions[questionIndex]}
          answers={answers}
          setAnswers={setAnswers}
          setQuestionIndex={setQuestionIndex}
        />
      ) : (
        <Results questions={questions} answers={answers} />
      )}
    </>
  );
}

export default App;
