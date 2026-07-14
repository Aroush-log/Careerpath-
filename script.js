const questions = [

{
question:"What do you enjoy most?",
options:[
["Building technology","Software Engineer"],
["Creating businesses","Entrepreneur"],
["Understanding people","Product Manager"],
["Discovering new ideas","AI Researcher"]
]
},

{
question:"Which area interests you?",
options:[
["Technology","Software Engineer"],
["Business","Entrepreneur"],
["Design and creativity","UX Designer"],
["Research and science","AI Researcher"]
]
},

{
question:"How do you like solving problems?",
options:[
["By creating solutions","Product Manager"],
["By experimenting","AI Researcher"],
["By coding","Software Engineer"],
["By leading ideas","Entrepreneur"]
]
}

];


const careers={

"Software Engineer":{
text:"Build applications, websites, and technology systems.",
skills:"Programming, algorithms, problem solving"
},

"Entrepreneur":{
text:"Create businesses by identifying problems and building solutions.",
skills:"Leadership, innovation, strategy"
},

"Product Manager":{
text:"Connect technology, business, and users to create products.",
skills:"Communication, research, decision making"
},

"AI Researcher":{
text:"Explore artificial intelligence and develop new technologies.",
skills:"Programming, mathematics, research"
},

"UX Designer":{
text:"Design digital experiences that are simple and enjoyable.",
skills:"Design, psychology, user research"
}

};


let current=0;

let scores={};


function startQuiz(){

document.querySelector("header").classList.add("hidden");

document.querySelector("#quiz").classList.remove("hidden");

showQuestion();

}



function showQuestion(){

let q=questions[current];

document.getElementById("question").innerHTML=q.question;


let options="";


q.options.forEach(option=>{

options+=`

<button onclick="answer('${option[1]}')">

${option[0]}

</button>

`;

});


document.getElementById("options").innerHTML=options;

}



function answer(career){


scores[career]=(scores[career]||0)+1;


current++;


if(current < questions.length){

showQuestion();

}

else{

showResults();

}

}



function showResults(){


document.querySelector("#quiz").classList.add("hidden");

document.querySelector("#results").classList.remove("hidden");


let sorted=Object.keys(scores)
.sort((a,b)=>scores[b]-scores[a])
.slice(0,3);



let output="";


sorted.forEach(career=>{

output+=`

<div class="card">

<h3>${career}</h3>

<p>${careers[career].text}</p>

<strong>Skills:</strong>

<p>${careers[career].skills}</p>

</div>

`;

});


document.getElementById("careerResults").innerHTML=output;


}



function restart(){

current=0;

scores={};

document.querySelector("#results").classList.add("hidden");

document.querySelector("header").classList.remove("hidden");

}
