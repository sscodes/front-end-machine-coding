import React, { useEffect } from 'react';

const Question = ({ question, answers, setAnswers, setQuestionIndex }) => {
  const handleSubmitAnswer = (ans) => {
    setAnswers([...answers, ans]);
    setQuestionIndex((e) => e + 1);
  };

  return question.question ? (
    <div className='question-card'>
      <div className='question-section'>{question.question}</div>
      <div className='options-section'>
        {question.answerOptions.map((option) => (
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            key={option.text}
          >
            <div
              className='options'
              onClick={() => handleSubmitAnswer(option.text)}
            >
              {option.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    console.log(question)
  );
};

export default Question;
