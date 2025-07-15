gameseq=[]
userseq=[]
let started = false;
randcolor=["color1","color2","color3","color4"]


level = 0;
document.addEventListener("keypress",function(){
    if(started == false){
            console.log("game started");
            
}
started = true;
levelUp();


});
function buttonFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
}

function levelUp(){
userseq=[]
level++;
document.querySelector("h3").innerText= `level ${level}`;
rdmidx=Math.floor(Math.random()*3);
rdmclr= randcolor[rdmidx];
gameseq.push(rdmclr);
rdmButton= document.querySelector(`.${rdmclr}`);
buttonFlash(rdmButton);

}
function checkans(idx){
    
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000)
        }
    

    }
    else{
        document.querySelector("h3").innerHTML=`game over your score was <b> ${level}</b> <br> press any key to restart `;
        reset()
    }
}
function buttonpress(params) {
 btn = this;
 buttonFlash(btn);
 usercolor = btn.getAttribute("id");
 userseq.push(usercolor);
 checkans(userseq.length-1);
    
}
allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress)
}
function reset(){
    started = false;
    userseq=[]
    gameseq=[]
    level=0;
}
function changeColor(color,delay,nextColor){
    h2 = document.querySelector("h2");
    setTimeout(()=>{
        h2.style.color=color;
        nextColor();
    },delay)
    
}
    changeColor("blue",1000,()=>{
    changeColor("pink",2000,()=>{
        changeColor("green",3000)
    })
})



