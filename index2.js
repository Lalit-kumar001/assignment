var slide=document.querySelector('.slider');
var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var div2=document.querySelector('.div2');
var div1=document.querySelector('.div1');
var pos2=document.querySelector('.pos2');
var pos1=document.querySelector('.pos1');
var pos3=document.querySelector('.pos3');
var pos4=document.querySelector('.pos4');


btn1.addEventListener('click',function(){
    pos1.classList.remove('left');
    pos1.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos3.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos3.classList.add('right');
    pos4.classList.add('right');



})

btn2.addEventListener('click',function(){
    
    pos2.classList.remove('right');
    pos2.classList.remove('left');
    pos2.classList.add('current');

    // remove class 
    pos1.classList.add('left');


    // pos3.classList.remove('current');
    // pos4.classList.remove('current');

    // add class 
    // pos2.classList.add('right');
    // pos3.classList.add('right');
    // pos4.classList.add('right');

})


btn3.addEventListener('click',function(){
    pos3.classList.remove('right');
    pos3.classList.remove('left');
    pos3.classList.add('current');

    // remove class 
    pos2.classList.add('left');
})


btn4.addEventListener('click',function(){
    pos4.classList.remove('right');
    pos4.classList.add('current');

    // remove class 
    pos3.classList.add('left');
})
