/*document.getElementById("header") .addEventListener("mousemove", function(event){
    console.log(" Mouse Move: ");
});

document.addEventListener("click", function(event){
    console.log(" On Click: ");
});

document.addEventListener("keyup", function(event){
    console.log(" Key Up: ");
});

document.getElementById("header").addEventListener("click", function(event){ console.log("fuck you");});
*/
function exec(){
    var toggle = document.getElementById('proj-title');

    if (toggle){
        toggle.addEventListener('click' ,function(){$('img').toggle(); $('h3').toggle();});
    } else {
        console.log("toggle is empty");
    }
    
}
  
// document.addEventListener("DOMContentLoaded", function(event) { 
//     //do work
//     exec();
//   });

$(document).ready(function(){

    exec();
});



