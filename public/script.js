// hamburger
const ham = document.getElementById("hamburger");
const cross = document.getElementById("cross");
// const navBar = document.getElementById("left");
// const right = document.getElementById("right");
const navBar = document.querySelector(".left");
const right = document.querySelector(".right");
ham.addEventListener("click",function(){
        navBar.style.left = "0vw";
        navBar.style.transition = "all 1s ease"
    
})
cross.addEventListener("click",function(){
         navBar.style.left = "-100vw";
        navBar.style.transition = "all 1s ease"
    
})
// preloader 
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

// about page
var i = 0;
var tag = document.getElementById("text1");
var html = document.getElementById("text1").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typeWriter() {
    if (i <= txt.length) {
        document.getElementById("text1").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

var j = 0;
var tag1 = document.getElementById("text2");
var html1 = document.getElementById("text2").innerHTML;
var attr1 = tag1.setAttribute("data", html1);
var txt1 = tag1.getAttribute("data");
var speed = 170;

function typeWriter1() {
    if (j <= txt1.length) {
        document.getElementById("text2").innerHTML = txt1.slice(0, j + 1);
        j++;
        setTimeout(typeWriter1, speed);
    }
}

typeWriter1();

var k = 0;
var tag2 = document.getElementById("text3");
var html2 = document.getElementById("text3").innerHTML;
var attr2 = tag2.setAttribute("data", html2);
var txt2 = tag2.getAttribute("data");
var speed = 170;

function typeWriter2() {
    if (k <= txt2.length) {
        document.getElementById("text3").innerHTML = txt2.slice(0, k + 1);
        k++;
        setTimeout(typeWriter2, speed);
    }
}

typeWriter2();