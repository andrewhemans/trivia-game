// store Questions
var questions = [
    {
        text: "What is the capitol of Norway?",
        answer: "Oslo",
        options: ["Helsinki", "Oslo", "Copenhagen"],
    },
    {
        text: "What is the capitol of Japan?",
        answer: "Tokyo",
        options: ["Tokyo", "Kyoto", "Copenhagen"],
    },
    {
        text: "What is the capitol of Canada?",
        answer: "Calgary",
        options: ["Clagary", "Ottowa", "Vancouver"],
    },
];

var questionNumber = 0;
// var current = questions[questionNumber];
var time = 60;
var intervalId;
var userAnswer;

//Start game
// setTimeout(loopQuestions, 1000 * 5);

$( "#button" ).click(function() {
  loopQuestions();
  run();
  questionNumber++;
  // console.log(current);
  console.log(questionNumber);
  });


function loopQuestions() {
  if (questionNumber < questions.length) {
    $("#left").html("<p>" + questions[questionNumber].text + "</p>");
    $("#left").append("<ul id='list'></ul>")
    options();
  } else if (questionNumber === questions.length) {
    questionNumber = 0;
  }
}

function options() {
  for (var i = 0; i < questions[questionNumber].options.length; i++) {
    // console.log(current.options[i]);
    $("#list").append("<li class='options' value='" + questions[questionNumber].options[i] + "'>" + questions[questionNumber].options[i] + "</li>");
  }
}

function selectAnswer() {
  $(".options").click(function() {

  });


  if (userAnswer === questions[questionNumber].answer) {
    console.log("Correct");
  } else if (!userAnswer === questions[questionNumber].answer) {
    console.log("Wrong");

  }
}


function lose() {
  $("#left").html("<p></p>");
  $( "#list" ).remove();
  $("#middle").html("<p>you lose</p>");
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
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  time = 60;
  console.log(time);
}



//if right answer show correct, and log score

//if wrong answer show correct and log score

//remove question from array so its not asked again

//

// test
// function startTimer(duration, display) {
//     var timer = duration, seconds;
//     setInterval(function () {
//
//         seconds = parseInt(timer % 60, 10);
//
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//
//         display.textContent = seconds;
//
//         if (--timer < 0) {
//             timer = 0;
//             display.textContent = "times up";
//         }
//     }, 1000);
// }

// window.onload = function () {
//     var timer = 60 / 2,
//         display = document.querySelector('#middle');
//     startTimer(timer, display);
// };
