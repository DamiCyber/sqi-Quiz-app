//Question bank
var questionBank = [
  {
    question:
      "What is the capital of Australia?",
    option: ["Sydney", " Melbourne", "Canberra", "Brisbane"],
    answer: "Canberra",
  },
  {
    question: "In which year did the United States declare its independence?",
    option: [
      "1776",
      " 1789",
      "1800",
      "1620",
    ],
    answer: "1776",
  },
  {
    question: " Which planet is known as the Red Planet?",
    option: [
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
    ],
    answer: "Mars",
  },
  {
    question: "Who wrote the play Romeo and Juliet",
    option: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    question:
      "What is the largest mammal in the world?",
    option: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    answer: "Blue Whale",
  },
  {
    question: "Which is the smallest city in the world",
    option: ["Nepal City", "Vatican City", "Bhutan City", "Shri Lanka City"],
    answer: "Vatican City",
  },

  {
    question: "What is the capital of the fictional country of Eldoria?",
    option: [" Eldor", "Sylvania", "Zendar", "Mystria"],
    answer: "Zendar",
  },
  {
    question: "In the world of fantasy, what is a phoenix known for?",
    option: ["Ice manipulation", "Fire resurrection", "Teleportation", " Invisibility"],
    answer: "Fire resurrection",
  },
  {
    question: "Who is the protagonist in the novel Crystal Shadows ?",
    option: ["Elara Nightshade", " Alexander Stormrider", "Seraphina Moonlight", " Orion Thunderheart"],
    answer: "Elara Nightshade",
  },
  {
    question: "What is the primary source of magic in the land of Arcane Realms?",
    option: [" Starlight Crystals", "Dragon's Breath", "Moonstone Dust", "Enchanted Rivers"],
    answer: "Moonstone Dust",
  },
  {
    question: "In the universe of intergalactic travel, what powers the warp drives of starships?",
    option: ["Quasar Energy", "Dark Matter", "Hyperium Crystals", "Quantum Flux"],
    answer: "Hyperium Crystals",
  },
  {
    question: "Which is the largest ocean in the world?",
    option: ["Atlantic", "Indian", "Pacific", " Arctic"],
    answer: "Pacific",
  },
  {
    question: "Who wrote the play Hamlet?",
    option: ["Charles Dickens", "William Shakespeare", "Jane Austen", " Leo Tolstoy"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the capital city of Japan?",
    option: ["Seoul", "Tokyo", " Beijing", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "In chemistry, H2O represents which compound?",
    option: ["Hydrogen Peroxide", "Hydrochloric Acid", "Water", "Methane"],
    answer: "Water",
  },
  {
    question: "Who is known as the Father of Computers?",
    option: [" Alan Turing", "Charles Babbage", "Ada Lovelace", "Steve Jobs"],
    answer: "Charles Babbage",
  },
  {
    question: "Which is the most populated  country in the world?",
    option: ["U.S.A", "Brazil", "China", "India"],
    answer: "India",
  },
  {
    question: " Who discovered the theory of relativity?",
    option: [" Isaac Newton", "Albert Einstein", "Galileo Galilei", " Marie Curie"],
    answer: "Albert Einstein",
  },
  {
    question: " What is the currency of France?",
    option: [" Pound Sterling", " Euro", " Franc", " Yen"],
    answer: " Euro",
  },
  {
    question: "Who painted the Mona Lisa?",
    option: [" Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "  Michelangelo"],
    answer: "Leonardo da Vinci",
  },
  {
    question: " What is the powerhouse of the cell?",
    option: [" Nucleus", " Mitochondria", "Endoplasmic Reticulum", " Golgi Apparatus"],
    answer: " Mitochondria",
  },
  {
    question: " Which country is known as the Land of the Rising Sun?",
    option: [" China", "Japan", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: " Who wrote To Kill a Mockingbird?",
    option: [" J.K. Rowling", "Harper Lee", "Ernest Hemingway", "  George Orwell"],
    answer: "Harper Lee",
  },
];

let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scorecard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelector(".next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");

let i = 0;
let score = 0;

let pap = "./music/play.mp3";
let songOn = new Audio(pap);

let add ="./"
let Song = new Audio(add)

const displayQuestion = () => {
  for (j= 0; j < span.length; j++) {
    span[j].style.background = "none";
  }
  if (question !== "") {
    sag.style.display='block'
    scorebtn2.style.display = "none";
  }else {
    sag.style.display='none'
    scorebtn2.style.display = "block";
  }
  question.innerHTML = "Q." + (i + 1) + " " + questionBank[i].question;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
};

function calcScore(e) {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    songOn.play();
    score = score + 1
    document.getElementById(e.id).style.background = "#9aeabc ";
  } else {
    songOn.pause()
    document.getElementById(e.id).style.background = " #ff9393";
  }
  setTimeout(nextQuestion, 300);
}

function nextQuestion() {
  if (i < questionBank.length - 1) {
    i = i + 1;
    sag.style.display='none'
    displayQuestion();
    scorebtn2.style.display = "none";
  } else {
    points.innerHTML= ` You scored ${score} out of ${questionBank.length} !`
    sag.style.display='none'
    id.innerHTML=`<img src="./img/Cartoon_light_bulb_giving_thumb_up_vector_image_on_VectorStock__7_-removebg-preview.png"
    alt="img" class="img" style="width: 300px;">`
    scorebtn2.style.display = "block";
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

next.addEventListener("click", nextQuestion);

function backToQuiz() {
  location.reload();
}

displayQuestion();

