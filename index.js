let score_1=document.getElementById("score1");
let score_2=document.getElementById("score2");
let resultHome=0;
let resultGuest=0;

function Addph1(){
    resultHome+=1;
    console.log("Add 1 point to House");
    score_1.textContent=resultHome;
}
function Addph2(){
    resultHome+=2;
    console.log("Add 2 point to House");
    score_1.textContent=resultHome;
}
function Addph3(){
    resultHome+=3;
    console.log("Add 3 point to House");
    score_1.textContent=resultHome;
}
function Addpg1(){
    resultGuest+=1;
    console.log("Add 1 point to Guest");
    score_2.textContent=resultGuest;
}
function Addpg2(){
    resultGuest+=2;
    console.log("Add 2 point to Guest");
    score_2.textContent=resultGuest;
}
function Addpg3(){
    resultGuest+=3;
    console.log("Add 3 point to Guest");
    score_2.textContent=resultGuest;
}
function newgame()
{
    resultGuest=0;
    resultHome=0;
    score_1.textContent=0;
    score_2.textContent=0;
}