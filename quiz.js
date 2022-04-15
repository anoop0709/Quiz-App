
let counter = document.querySelector("#count");
let divContainer = document.querySelector("#questionContainer");
var charA,charB,charC,charD,question,choices,choice;
let pos =0;
var correct =0;
let nxtBtn = document.querySelector(".nxtBtn");
let prevBtn = document.querySelector(".prevBtn");
let subBtn = document.querySelector(".subBtn");
let questionsArray =[
  ['What is the capital of Finland?','Helsinki','Rovaniemi','Tampere','Saariselka','A'],
  ['What’s a baby rabbit called?','Coneys','Bunnies','Kittens','Doe','C'],
  ['What fruit takes the scientific name Mangifera indica?','Apple','Kiwi','Orange','Mango','D'],
  ['How many bones does a shark have?',360,192,36,'None','D'],
  ['What is the smallest country in the world?','Cuba','Vatican','Nauru','Monaco','B'],
  ['How many time zones are there in Russia?',2,11,4,10,'B'],
  ['Which UK city is Banksy from?','Bristol','Liverpool','London','Swansea','A'],
  ['What kind of food is Penne?','Salad','Sandwich','Noodles','Pasta','D'],
  ['How many permanent teeth does a dog have?',35,42,28,16,'B'],
  ['Which country in the world is believed to have the most miles of motorway?','India','America','China','Russia','C'],
  ['What language is spoken in Brazil?','Brazilian','German','Portuguese','Indigenous','C'],
  ['How many keys are there on a piano?',88,46,64,56,'A']
  ];
  


function renderQuestion(){
  if(pos >= questionsArray.length){
    
    if(correct == questionsArray.length){
      divContainer.innerHTML = "<h2>Test Finished</h2>";
      divContainer.innerHTML += "<h4>You got "+correct+" of "+questionsArray.length+" questions correct</h4>";
      divContainer.innerHTML += "<h2>AWESOME!</h2>";
    }else if(correct >= 9 && correct <= 11){
      divContainer.innerHTML = "<h2>Test Finished</h2>";
      divContainer.innerHTML += "<h4>You got "+correct+" of "+questionsArray.length+" questions correct</h4>";
      divContainer.innerHTML += "<h2>GOOD!</h2>";
    }else if(correct >= 5 && correct <= 8){
      divContainer.innerHTML = "<h2>Test Finished</h2>";
      divContainer.innerHTML += "<h4>You got "+correct+" of "+questionsArray.length+" questions correct</h4>";
      divContainer.innerHTML += "<h2>AVERAGE</h2>";
    }else{
      divContainer.innerHTML = "<h2>Test Finished</h2>";
      divContainer.innerHTML += "<h4>You got "+correct+" of "+questionsArray.length+" questions correct</h4>";
      divContainer.innerHTML += "<h2>PLEASE TRY AGAIN</h2>";
      
    }
    pos = 0;
    correct = 0;
    return false;
  }


  counter.innerHTML = pos+1;
  question = questionsArray[pos][0];
  charA = questionsArray[pos][1];
  charB = questionsArray[pos][2];
  charC = questionsArray[pos][3];
  charD = questionsArray[pos][4];
  if(pos == questionsArray.length-1){
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
      if(choice == questionsArray[pos][5]){
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
