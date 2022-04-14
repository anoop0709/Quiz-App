
let counter = document.querySelector("#count");
let divContainer = document.querySelector("#questionContainer");
var charA,charB,charC,charD,question,choices,choice;
let pos =0;
var correct =0;
let nxtBtn = document.querySelector(".nxtBtn");
let prevBtn = document.querySelector(".prevBtn");
let subBtn = document.querySelector(".subBtn");
let questions = [
  ["1.question 1","ans1","ans2","ans3","ans4","B"],
  ["2.question 2","ans1","ans2","ans3","ans4","A"],
  ["3.question 3","ans1","ans2","ans3","ans4","C"],
  ["4.question 4","ans1","ans2","ans3","ans4","D"],
  ["5.question 5","ans1","ans2","ans3","ans4","A"],
  ["6.question 6","ans1","ans2","ans3","ans4","C"],
  ["7.question 7","ans1","ans2","ans3","ans4","B"],
  ["8.question 8","ans1","ans2","ans3","ans4","A"],
  ["9.question 9","ans1","ans2","ans3","ans4","D"],
  ["10.question 10","ans1","ans2","ans3","ans4","B"],
  ["11.question 11","ans1","ans2","ans3","ans4","C"],
  ["12.question 12","ans1","ans2","ans3","ans4","A"]
];



function renderQuestion(){
  if(pos >= questions.length){
    divContainer.innerHTML = "<h1>Test Finished</h1>";
    divContainer.innerHTML += "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    pos = 0;
    correct = 0;
    return false;
  }


  counter.innerHTML = pos+1;
  question = questions[pos][0];
  charA = questions[pos][1];
  charB = questions[pos][2];
  charC = questions[pos][3];
  charD = questions[pos][4];
  if(pos == questions.length-1){
    divContainer.innerHTML = "<h3>"+question+"</h3>";
    divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'>"+charA+"<br>";
    divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'>"+charB+"<br>";
    divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'>"+charC+"<br>";
    divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'D'>"+charD+"<br>";
    divContainer.innerHTML += " <button type = 'button' class='nxtBtn' onclick = 'checkAnswer()'>Finish</button>";
  /*}else if(pos >= 1 && pos < questions.length-1){
    divContainer.innerHTML = "<h3>"+question+"</h3>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'>"+charA+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'>"+charB+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'>"+charC+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'D'>"+charD+"<br>";
  divContainer.innerHTML += " <button type = 'button' class='prevBtn' onclick = 'prevAnswer()'>Prev</button>";
  divContainer.innerHTML += " <button type = 'button' class='nxtBtn' onclick = 'checkAnswer()'>Next</button>";*/
  }else{
  divContainer.innerHTML = "<h3>"+question+"</h3>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'A'>"+charA+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'B'>"+charB+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'C'>"+charC+"<br>";
  divContainer.innerHTML += "<input type = 'radio' name = 'choices' value = 'D'>"+charD+"<br>";
  divContainer.innerHTML += " <button type = 'button' class='nxtBtn' onclick = 'checkAnswer()'>Next</button>";
  }
}


function checkAnswer(){
  choices = document.getElementsByName("choices");
  
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked == true){
      choice = choices[i].value;
      if(choice == questions[pos][5]){
        correct++;
      }
    }
  }
  pos++;
  renderQuestion();
  }

  function prevAnswer(){
    pos--;
    renderQuestion();
  }
  



window.addEventListener("load",renderQuestion, false);