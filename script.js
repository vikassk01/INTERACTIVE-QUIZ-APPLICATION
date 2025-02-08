//random questions...
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "C",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "B",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
      correctAnswer: "A",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "D",
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correctAnswer: "C",
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let userName = '';
  
  // Hardcoded login credentials - or enter your own credentials
  const validUsername = "vikas";
  const validPassword = "1234";
  
  // Login function to validate user credentials
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    if (username === validUsername && password === validPassword) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('quiz').style.display = 'block';
      loadQuestion();
    } else {
      document.getElementById('login-error').style.display = 'block';
    }
  }
  
  // Load current question
  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, index) => {
      button.innerText = question.options[index];
    });
    document.getElementById('feedback').innerText = '';
  }
  
  // Check if selected answer is correct
  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const feedback = document.getElementById('feedback');
    
    if (selectedAnswer === correctAnswer) {
      score++;
      feedback.innerText = 'Correct!';
      feedback.style.color = 'green';
    } else {
      feedback.innerText = 'Incorrect!';
      feedback.style.color = 'red';
    }
  
    // Disable buttons after answering
    document.querySelectorAll('.answer-button').forEach(button => {
      button.disabled = true;
    });
  
    // Move to next question after 2 seconds
    setTimeout(nextQuestion, 2000);
  }
  
  // Move to the next question or show results if it's the last question
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  
    // Re-enable buttons for next question
    document.querySelectorAll('.answer-button').forEach(button => {
      button.disabled = false;
    });
  }
  
  // Show the result after the quiz is completed
  function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('user-name').innerText = validUsername;
    document.getElementById('final-score').innerText = score;
  }
  
  // Restart the quiz for the same user
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuestion();
    document.getElementById('score').innerText = score;
  }
  
