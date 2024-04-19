import React from 'react';

const Results = ({ questions, answers }) => {
  return (
    <div className='results-section'>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Response</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, i) => (
            <tr key={i}>
              <td>{question.question}</td>
              <td
                className={`${
                  answers[i] ===
                  question.answerOptions.filter(
                    (ansopt) => ansopt.isCorrect === true
                  )[0].text
                    ? 'correct'
                    : 'incorrect'
                }`}
              >
                {answers[i]}
              </td>
              <td>
                {
                  question.answerOptions.filter(
                    (ansopt) => ansopt.isCorrect === true
                  )[0].text
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
