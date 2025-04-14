let gameSeq=[];
let userSeq=[];
let level=0;
let started=false;

let btns=["red","yellow","purple","green"];

let h2=document.querySelector("h2");
addEventListener("keypress",()=>{
    if(started==false)
        {
            started=true;
            levelUp();
        }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(()=>{
        btn.classList.remove("gameflash");
    },105);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },105);
}


function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let rand_indx=Math.floor(Math.random()*3);
    let rand_color=btns[rand_indx];
    let randbtn=document.querySelector(`.${rand_color}`);
    gameSeq.push(rand_color);
    gameFlash(randbtn);
}

function check(indx){
    if(gameSeq[indx]==userSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>  Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;   
}