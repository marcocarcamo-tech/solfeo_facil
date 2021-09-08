let data_base = readText("./level1.json")
let interpreter_bp = JSON.parse(data_base)

let possibleAnswers;
let question;
let matching_button = [
    select_id("button1"),
    select_id("button2"),
    select_id("button3")
]
let rightAnswer;
let wrongAnswer;
let totalQuestions = 20;
let totalAnswers = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let scoreCount;



randomQuestion();


function randomQuestion() {
    chooseQuestion(Math.floor(Math.random() * interpreter_bp["exercise1"].length))
}



function chooseQuestion(n) {
    question = interpreter_bp["exercise1"][n]
    select_id("container__question").innerHTML = question.question
    select_id("container__image--question").setAttribute("src", question.image)
    style("container__image--question").objectFit = question.object_fit;
    disorderAnswers(question)
    
}



function disorderAnswers(question) {
    //Array with possible answers
    possibleAnswers = [
        question.right, //[0]
        question.wrong1, //[1]
        question.wrong2 //[2]
    ]
    //Makin random the array
    possibleAnswers.sort(() => Math.random()-0.5)
    //Match the buttons in HTML with indexes of the array
    select_id("button1").innerHTML = possibleAnswers[0]
    select_id("button2").innerHTML = possibleAnswers[1]
    select_id("button3").innerHTML = possibleAnswers[2]

    
}

function pressButton(i) {
    
    if (possibleAnswers[i]== question.right){
        matching_button[i].style.backgroundColor = "green"
        rightAnswer = true;
        rightAnswers++;
        totalAnswers++;
    } else {
        matching_button[i].style.backgroundColor = "red"
        wrongAnswer = true;
        wrongAnswers++;
        totalAnswers++;
    }

    setTimeout(()=> {
        reload();
    }, 1500);
}
//Reloads the question in the screen
function reload(){
    for (const button of matching_button){
        button.style.backgroundColor = "peru"
    }
    if (totalAnswers === totalQuestions){
        //Finish the Game
        totalAnswers = totalQuestions;
        finishGame();
    }
    randomQuestion();

}

//Recognize when yo have reached max questions
function finishGame(){
    //Finish the Game
    console.log("Juego terminado")
    scoreCalculator(rightAnswers, wrongAnswers);
};

//Make the calculation for the score 
function scoreCalculator (right, wrong) {
    let rightPoints = right * 10;
    let wrongPoints = wrong * 2;
    scoreCount = rightPoints - wrongPoints;
    console.log(`Hiciste ${scoreCount} puntos`)
}


function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readText(localRoute) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", localRoute, false);
    xmlhttp.send();

    if(xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }

    return texto;
}