// Set the questions
const quiz = new Map([
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonderwoman's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
  ]);
  let score = 0
  for(const [question,answer] of quiz.entries()){
    const respose = prompt(question)
    if(respose === answer){
        alert("correct")
        score++
    }else{
        alert("wrong")
    }
  }
  alert(`your score is ${score}`)