const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 14;
const INNCORECT_TIMER = -10;

