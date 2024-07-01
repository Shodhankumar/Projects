let gameseq=[];
let userseq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

h3=document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game started");

        levelup();
    }
});

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    //random btn 
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    flash(randBtn);
}

function checkAns(idx){
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length===gameseq.length){
        setTimeout(levelup,1000);
    }
   }else{
    h3.innerHTML=`Game over ! Your score was <b>${level}</b> <br> press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
   }
}

function btnPress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
}