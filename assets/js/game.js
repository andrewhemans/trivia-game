// store Questions
var questions = [
    {
        text: "What is Kramer's first name?",
        answer: "Cosmo",
        options: ["Peterman", "Cosmo", "Puddy"],
    },
    {
        text: "What was George's favorite pretend career?",
        answer: "Architect",
        options: ["Marine Biologist", "Real Estate Agent", "Architect"],
    },
    {
        text: "For whom did Elaine buy white socks?",
        answer: "Mr. Pitt",
        options: ["Mr. Pitt", "J. Peterman", "Jerry"],
    },
    {
        text: "What is Kramer scared of?",
        answer: "Clowns",
        options: ["Swimming", "Clowns", "The Dentist"],
    },
    {
        text: "Where do Jerry's parents live?",
        answer: "Florida",
        options: ["Long Island", "California", "Florida"],
    },
    {
        text: "What happens when Jerry helps the doorman where Mr. Pitt lives?",
        answer: "A couch was stolen",
        options: ["The elevator broke", "Jerry gets mugged", "A couch was stolen"],
    },
    {
        text: "What is George's secret ATM code that he keeps from Susan",
        answer: "BOSCO",
        options: ["PASSWORD", "BOSCO", "123456"],
    },
];

var questionNumber = 0;
// var current = questions[questionNumber];
var time = 30;
var intervalId;
var userAnswer;
var correct = 0;
var wrong = 0;

//Start game
// setTimeout(loopQuestions, 1000 * 5);

$( "#button" ).click(function() {
  loopQuestions();
  run();
  $("#button").remove();
  console.log(questionNumber);
  });

  function nextQuestion() {
    setTimeout(loopQuestions, 1000 * 5);
  }



// this will choose each question
function loopQuestions() {
  if (questionNumber < questions.length) {
    $("#show-questions").html("<h2 class='subtitle'>" + questions[questionNumber].text + "</h2>");
    $("#show-questions").append("<ul id='list'></ul>")
    options();
    $(".options").click(function() {
      var value = this.id;
      userAnswer = value;
      selectAnswer();
    });
  } else if (questionNumber === questions.length) {
    questionNumber = 0;
  }
}
//this displays the options users can choose
function options() {
  for (var i = 0; i < questions[questionNumber].options.length; i++) {
    // console.log(current.options[i]);
    $("#list").append("<li class='options' id='" + questions[questionNumber].options[i] + "'>" + questions[questionNumber].options[i] + "</li>");
  }
}

// this will detirmine if the select option is right or wrong.
function selectAnswer() {
  //if right answer show correct, and log score
    if (questions[questionNumber].answer === userAnswer) {
    correct++
    questionNumber++;
  }
  //if wrong answer show correct and log score
  else {
    console.log("wrong");
    lose();
    stop();
    wrong++
    questionNumber++;
    console.log(questionNumber);
    // wait to start next question
    nextQuestion();
  }
}


function lose() {
  $("#show-questions").html("<p>you lose</p>");
  $( "#list" ).remove();
  $("#show-number").html("<p></p>");
}


//select a question from array

//Time Questions


//display countdown on screen
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);

}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  time--;

  //  Show the number in the #show-number tag.
  $("#show-number").html("<h2>" + time + "</h2>");
    // console.log(time);

  //  Once number hits zero...
  if (time === 0) {

    //  ...run the stop function.
    stop();
    lose();
    questionNumber++;
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  time = 30;
  console.log(time);
}







//remove question from array so its not asked again
