import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Set up the timer
    const timerId = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000); // Decrease by 1 every 1 second

    // Cleanup function
    return () => {
      clearTimeout(timerId); // Clear the timeout when the component unmounts or dependencies change
    };
  }, [timeRemaining]); // Dependency array: re-run effect when timeRemaining changes

  // Handle time running out
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset time for the next question
      onAnswered(false); // Call onAnswered with false
    }
  }, [timeRemaining, onAnswered]); // Dependencies: timeRemaining and onAnswered

  return (
    <div>
      <h1>{question.prompt}</h1>
      <p>Time Remaining: {timeRemaining} seconds</p>
      {/* Render answers here, e.g., question.answers.map(...) */}
    </div>
  );
}

export default Question;