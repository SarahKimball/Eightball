import React, { useState } from 'react';
import './index.css';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={getRandomAnswer}
    >
      <p>{message}</p>
    </div>
  );
};

export default EightBall;
