
var timer = 60;
var score = 0;
var hit = 0;

// for increase score
function InScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score
}

// for decrease score when hit value is not equal to bubble
function DeScore(){
    score -= 5;
    document.querySelector("#scorevalue").textContent = score
}

// every time new hit value
function NewHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = hit
}

// for make bubble
function MakeBubbles(){
    var clutter = [];

for (i=1; i<=84;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbottom").innerHTML = clutter;
}

// to activate timer
function runtimer(){
    var a = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else{
            document.querySelector("#pbottom").innerHTML=`<h1 style="font-size:50px"> Game Over </h1> `
            clearInterval(a);
        }

    },1000)
}

// click event 
document.querySelector("#pbottom").addEventListener("click",function(dets){
    var click=(Number(dets.target.textContent));
    if (click===hit){
        InScore();
        MakeBubbles();
        NewHit();  
    }
    else{
        DeScore();
    }
})
MakeBubbles();
runtimer();
NewHit();
