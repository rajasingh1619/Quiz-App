const question=[{
    'id':"1",
    'ques':"Who is the ICC ODI Cricketer of the Year for 2019?",
    'a':"Virat Kohli",
    'b':"Rohit Sharma",
    'c':"Hardik Pandiya",
    'd':"Ravindra Jadeja",
    'correct':"b"
},
    {
        'id':"2",
        'ques':"Who becomes the first Cricketer to win three top ICC honours in the same Year?",
        'a':"Shikhar Dhawan",
        'b':"Rohit Sharma",
        'c':"Virat Kohli",
        'd':"Sachin Tendulkar",
        'correct':"c"
    },
    {
        'id':"3",
        'ques':"Who was the ICC's Emerging player of the Year 2018?",
        'a':"Hardik Pandiya",
        'b':"Shreyas Iyer",
        'c':"Ravindra Jadeja",
        'd':"Rishabh Pant",
        'correct':"d"
    },
    {
    'id':"4",
    'ques':"Who was the Man of the series in 1983 Cricket World cup?",
    'a':"Mohinder Amarnath",
    'b':"K Srikkanth",
    'c':"Kapil Dev",
    'd':"Sunil Gavaskar",
    'correct':"a"
    },
    {
        'id':"5",
        'ques':"Dhoni Holds the post of Vice-President of Which Indian Company?",
        'a':"Ambuja Cements",
        'b':"Ultratech Cements",
        'c':"Indian Cements",
        'd':"ACC Cements",
        'correct':"c"
    }
];
let index=0;
const length=question.length;
const inputCheck=document.querySelectorAll("input");
const quesBox=document.getElementById("question_div");
const options=document.getElementsByClassName("options");
const reset=()=>{
    inputCheck.forEach((input)=>{
        input.checked=false;
    })
}

const loadQuestion=()=>{
const data=question[index];
if(index==length){
return endQuiz();
}
reset();
quesBox.innerText=`${data.id}) ${data.ques}`;
options[0].innerText=data.a;
options[1].innerText=data.b;
options[2].innerText=data.c;
options[3].innerText=data.d;
};
loadQuestion();
let correctAns=0;
 
const  nextItem=()=>{
    const data=question[index];
      let ans=getCheck();
      console.log(ans,data.correct);
      if(ans==data.correct)
      correctAns=correctAns+1;
    index=index+1;
    loadQuestion();
    return;
}

const getCheck=()=>{
   
    let answer;
    inputCheck.forEach((input)=>{
        if(input.checked){
            answer=input.value;
        }
    })
    return answer;
}

const endQuiz=()=>{
    document.getElementById("box_div").innerHTML=`
    <b>         Thank you for Playing The Quiz &#128525<b> 
    <br/>
    <b>         Score : ${correctAns}/${length}<b>`
}


