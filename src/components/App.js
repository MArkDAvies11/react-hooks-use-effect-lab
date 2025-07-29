import React, { useState } from 'react';
import Question from './Question'; // Assuming Question.js is in the same directory

const triviaQuestions = [
  {
    id: 1,
    prompt: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    prompt: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  // ... more questions
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswered = (isCorrect) => {
    // This callback is called when the timer runs out (false) or
    // if you implement answer selection logic (true/false based on user input)

    console.log(`Question answered: ${isCorrect ? 'Correct' : 'Incorrect/Time out'}`);

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    // You might want to add logic here to check if there are more questions,
    // or end the game if all questions are answered.
    if (currentQuestionIndex >= triviaQuestions.length - 1) {
        console.log("Game Over!");
        // Reset game, show score, etc.
        setCurrentQuestionIndex(0); // For simple demonstration, loop back
    }
  };

  const currentQuestion = triviaQuestions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Loading questions...</div>; // Or display a "Game Over" screen
  }

  return (
    <div className="App">
      <Question
        key={currentQuestion.id} // Important for re-mounting the Question component
        question={currentQuestion}
        onAnswered={handleAnswered}
      />
    </div>
  );
}

export default App;