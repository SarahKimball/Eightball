import React from 'react';
import EightBall from './EightBall';

const answers = [
  // Your array of answers as described in the exercise
];

const App = () => {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
};

export default App;
