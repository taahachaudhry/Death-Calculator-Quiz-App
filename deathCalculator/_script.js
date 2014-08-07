// Variables
var score = 0;
var counter = 0;
var x = 0;
var index = 0;
var questionCounter = 11;
var displayResultNumber = 10;

// Constructor for question objects
var Question = function (question, choice1, choice2, choice3, choice4, number, bestAnswer, nextBest, die) {
    this.question = question;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.choice4 = choice4;
    this.number = number;
    this.bestAnswer = bestAnswer;
    this.nextBest = nextBest;
    this.die = die;
}

// Array to hold questions
var questions = []
// Create Question objects and add questions to questions array
var questionOne = new Question("What is your diet like?", 'Meat on meat on meat', 'Vegetarian/Vegan', "I'm on one of those 'drink lemon-water only and eat nothing' cleansing diets", "Doesn't matter since I work out", 1, 1, 4,3);
questions.push(questionOne);
var questionTwo = new Question("How often do you read a book or informative articles?", 'Atleast once a day', 'A few times a week', 'A few times a month', 'I fall into the category that most of society does, NEVER', 2, 1, 2, 4);
questions.push(questionTwo)
var questionThree = new Question("How often do you exercise?", '1-2 times a week', '3-4 times a week', '5+ times a week', 'Never. I am a bum.', 3, 4, 2, 1);
questions.push(questionThree);
var questionFour = new Question("How often do you sleep?", '7-8 hours a week', '7-8 hours a day','Whenever I am in class','24/7. Like I said, I am a bum.', 4, 3, 4, 2);
questions.push(questionFour);
var questionFive= new Question("Where do you live/would choose to live?", 'Compton', 'Malaysia', 'San Francisco', 'Some city no one cares about since it is Texas', 5, 3, 2, 1);
questions.push(questionFive);
var questionSix= new Question("How often do you watch TV?", '1-2 times a week', 'Once in a while', 'All day Every day', "Ain't nobody got time for that",6,4,1,3);
questions.push(questionSix);
var questionSeven = new Question("Which of these shows is your favorite?", 'The Office', 'Keeping up with the Kardashians', 'Breaking Bad', 'The Walking Dead', 7, 3, 1, 2);
questions.push(questionSeven);
var questionEight = new Question("What is your favorite food?", "Burgers", 'Anything with meat or chicken', 'Seafood/Sushi', 'Vegetables. I like to stay healthy.',8, 2, 1, 4)
questions.push(questionEight);
var questionNine = new Question("What is your favorite NFL team?", "American football isn't real football", 'The SF 49ers', 'One of those wack Texas NFL teams', 'Philadelphia Eagles', 9, 2, 4, 1);
questions.push(questionNine);
var questionTen = new Question("What is your favorite pokemon?", 'Spearow', 'Butterfree (that butterfly thing)', 'Charmander', 'Pikachu', 10, 3,1,2);
questions.push(questionTen);
var questionEleven = new Question("What is your favorite programming language?", 'C/C++','Ruby/Python','Javascript','C#/Java',11,1,2,3);
questions.push(questionEleven);

// Write questions to a table
var displayTable = function () {
    document.getElementById('homepage').innerHTML = '';
    var h = '';
        h += "<table>";
        h += "<div style='font-size: 50px; text-align:center'>Question " + questions[index].number + "</div>";
        h += "<div style='font-size: 20px; text-align:center'>" + questions[index].question + "</div><br>";
        h += "<div style='font-size: 18px'><input type='radio' name='question' value='1'/> " + questions[index].choice1 + "</div>";
        h += "<div style='font-size: 18px'><input type='radio' name='question' value='2'/> " + questions[index].choice2 + "</div>";
        h += "<div style='font-size: 18px'><input type='radio' name='question' value='3'/> " + questions[index].choice3 + "</div>";
        h += "<div style='font-size: 18px'><input type='radio' name='question' value='4'/> " + questions[index].choice4 + "</div><br>";
        h += "</table>";
        h += "<button id='continue' class='btn btn-primary btn-lg' onclick='scoring()' style='padding-right: 30px;padding-left: 30px;position: absolute;margin-left:-100px;left:50%;width:200px;'>Submit</button>"
        h += "<br><br><br><div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='" + (questions[index].number / questionCounter) * 100 + "' aria-valuemin='0' aria-valuemax='100' style='width: " + (questions[index].number / questionCounter) * 100 + "%;'><span class='sr-only'>" +(questions[index].number / questionCounter) * 100 + "</span></div></div>";

    document.getElementById('questionTable').innerHTML = h;
};

// On submit, update score
var scoring = function () {
    var answers = document.getElementsByName('question');
    var userAnswer=null;
    for (var i in answers) {
        if (answers[i].checked) {
            userAnswer = parseInt(answers[i].value);
            //console.log(userAnswer)
        }
    }
    if (userAnswer === null) {    
        alert("Select an answer please.");
        return;
    }
    if (userAnswer == questions[index].bestAnswer) {
        alert("That was a very wise choice, indeed.");
        score += 2;      
    } else if (userAnswer == questions[index].nextBest) {
        score++;
        alert("Not a bad choice.")
    } else if (userAnswer == questions[index].die) {
        score -= 1;
        alert("Oooo I wouldn't have chosen that if I were you!")
    } else {
        score;
        alert("Not the best of choices.")
    }
    console.log(score);
    nextQuestion();
}

// Display next question
var nextQuestion = function () {
    if (index<displayResultNumber) {
        index++;
        displayTable(); 
    } else {
        displayResults();
    }
}

// Display results
var displayResults = function () {
    if (score > 17) {
        document.getElementById('questionTable').innerHTML = "<h1>It looks like you shall live a long life until the age of " + (Math.floor(Math.random() * 16) + 65) + ". Make the most out of it and stay happy my friend.</h1><br><br><p>Disclaimer: This is actually just a funny death quiz, and as scienfically accurate as this is, actual results and death age may drastically very.</p>";
    } else if (score > 12 && score < 18) {
        document.getElementById('questionTable').innerHTML = "<h1>The quiz prophecy predicts you will live until the age of " + (Math.floor(Math.random() * 19) + 46) + ". Become a happier person and you may live a little longer.</h1><br><br><p>Disclaimer: This is actually just a funny death quiz, and as scienfically accurate as this is, actual results and death age may drastically very.</p>";
    } else if (score > 9 && score < 13) {
        document.getElementById('questionTable').innerHTML = "<h1>Right as you were about to be successful, you will die at the age of " + (Math.floor(Math.random() * 10) + 36) + ".</h1><br><br><p>Disclaimer: This is actually just a funny death quiz, and as scienfically accurate as this is, actual results and death age may drastically very.</p>";
    } else if (score > 5 && score < 10) {
        document.getElementById('questionTable').innerHTML = "<h1>Spend your youth wisely as you will live until the age of " + (Math.floor(Math.random() * 11) + 25) + ".</h1><br><br><p>Disclaimer: This is actually just a funny death quiz, and as scienfically accurate as this is, actual results and death age may drastically very.</p>";
    } else {
        document.getElementById('questionTable').innerHTML = "<h1>The quiz has professed that you shall die within the next " + (Math.floor(Math.random() * 3) + 1) + " year(s). Enjoy the rest of your life. Advice: Travel the world. </h1><br><br><p>Disclaimer: This is actually just a funny death quiz, and as scienfically accurate as this is, actual results and death age may drastically very.</p>";
    }
}
