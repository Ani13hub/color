var num = 6;
var color = generatecolor(num);
var box = document.querySelectorAll(".box");
var rgb = document.getElementById("rgb");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector(".reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var choice = choose();
rgb.textContent = choice;
easy.addEventListener("click", function(){
    num = 3;
    s();
    easy.classList.add("selected");
    hard.classList.remove("selected");
    //num = 3;
    //color = generatecolor(num);
    //choice = choose();
    //rgb.textContent = choice;
    //for (var i=0; i<box.length; i++)
    //{
        //if(color[i]){
            //box[i].style.backgroundcolor = color[i];
        //}
        //else{
            //box[i].style.display = "none";
        //}
    //}
});
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    num = 6;
    s();
    //color = generatecolor(num);
    //choice = choose();
    //rgb.textContent = choice;
    //for (var i=0; i<box.length; i++)
    //{
        //box[i].style.backgroundcolor = color[i];
        //box[i].style.display = "block";
    //}
});
reset.addEventListener("click", function(){
    s();
    color = generatecolor(num);
    choice = choose();
    rgb.textContent = choice;
    for (var i = 0; i<box.length; i++)
    {
        box[i].style.backgroundColor = color[i];
    }
    h1.style.backgroundColor =  "rgb(11, 162, 250)";
    reset.textContent = "New Colors";
    message.textContent = "";
});

for (var i = 0; i<box.length; i++)
{
    rgb.textContent = choice;
    box[i].style.backgroundColor = color[i];
    box[i].addEventListener("click", function(){
        var clicked = this.style.backgroundColor;
        if(clicked === choice){
            message.textContent = "Correct";
            changecolor(choice);
            h1.style.backgroundColor = choice;
            reset.textContent = "Play Again";
            message.style.color = "rgb(11, 162, 255)";
        }
        else {
            this.style.backgroundColor= "rgb(19, 19, 34)";
            message.textContent = "Try Again";
        }
    });
}
function changecolor(color){
    for(var i=0; i<box.length; i++)
    box[i].style.backgroundColor = color;
}
function choose(){
    var rand = Math.floor(Math.random()*color.length + 1);
    return color[rand];
}
function generatecolor(x){
    var a = [];
    for (var i=0; i<x; i++){
        a[i] = pickrandom();
       //a.push(pickrandom());
    }
    return a;
}
function pickrandom(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
function s(){
    color = generatecolor(num);
    choice = choose();
    rgb.textContent = choice;
    for (var i = 0; i<box.length; i++)
    {
        if(color[i]){
            box[i].style.backgroundcolor = color[i];
            box[i].style.display = "block";
        }
        else{
            box[i].style.display = "none";
        }
    }
    h1.style.backgroundColor =  "rgb(11, 162, 250)";
    reset.textContent = "New Colors";
    message.textContent = "";
}
