var myscore= document.getElementById("myscore");
var compscore= document.getElementById("compscore");
let result= document.getElementById("result");
var mynumber= 0;
var compnumber= 0;
const resultarr=["stone","paper","scissor"];
var random;
var winning = new Audio('winning.wav');
var loosing = new Audio('loosing.wav');
var tie = new Audio('tie.wav');
var username= prompt("Please enter your name", "Type Here");
document.querySelector("#you").innerText= username;

document.querySelector("#img1").addEventListener("click",()=>{
    random=Math.floor(Math.random()*3);
   
    
    if(resultarr[random]=="stone"){
        result.innerText="The Match has been tied: Comp also choose Stone!";
        result.style.backgroundColor="#081b31";
        tie.play();
    }
    else if (resultarr[random]=="paper") {
        compscore.innerText= ++compnumber ;
        result.style.backgroundColor="red";
        loosing.play();
        result.innerText=`${username} loose the Match: Comp has choosed paper!`;
    } 
    else {
        myscore.innerText= ++mynumber ;
        result.style.backgroundColor="green";
        winning.play();
        result.innerText=`Congrates! ${username} won the Match: Comp has choosed scissor!`;
    }
});

document.querySelector("#img2").addEventListener("click",()=>{
    random=Math.floor(Math.random()*3);
   
    
    if(resultarr[random]=="paper"){
        result.innerText="The Match has been tied: Comp also choose Paper!";
        result.style.backgroundColor="#081b31";
        tie.play();
    }
    else if (resultarr[random]=="scissor") {
        compscore.innerText= ++compnumber ;
        result.style.backgroundColor="red";
        loosing.play();
        result.innerText=`${username} loose the Match: Comp has choosed paper!`;
    } 
    else {
        myscore.innerText= ++mynumber ;
        result.style.backgroundColor="green";
        winning.play();
        result.innerText=`Congrates! ${username} won the Match: Comp has choosed scissor!`;
    }
})

document.querySelector("#img3").addEventListener("click",()=>{
    random=Math.floor(Math.random()*3);
   
    
    if(resultarr[random]=="scissor"){
        result.innerText="The Match has been tied: Comp also choose scissor!";
        tie.play();
        result.style.backgroundColor="#081b31";
    }
    else if (resultarr[random]=="stone") {
        compscore.innerText= ++compnumber ;
        result.style.backgroundColor="red";
        loosing.play();
        result.innerText=`${username} loose the Match: Comp has choosed paper!`;
    } 
    else {
        myscore.innerText= ++mynumber ;
        result.style.backgroundColor="green";
        winning.play();
        result.innerText=`Congrates! ${username} won the Match: Comp has choosed scissor!`;
    }
})