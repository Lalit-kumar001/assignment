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
    pos1.classList.remove('right');
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
    
    // pos2.classList.remove('right');
    // pos2.classList.remove('left');
    // pos2.classList.add('current');

    // // remove class 
    // pos1.classList.add('left');

    pos2.classList.remove('right');
    pos2.classList.add('current');

    // remove class 
    pos1.classList.remove('current');
    pos3.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos1.classList.add('right');
    pos3.classList.add('right');
    pos4.classList.add('right');

})


btn3.addEventListener('click',function(){
    // pos3.classList.remove('right');
    // pos3.classList.remove('left');
    // pos3.classList.add('current');

    // // remove class 
    // pos2.classList.add('left');

    pos3.classList.remove('right');
    pos3.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos1.classList.remove('current');
    pos4.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos1.classList.add('right');
    pos4.classList.add('right');

})


btn4.addEventListener('click',function(){
    // pos4.classList.remove('right');
    // pos4.classList.add('current');

    // // remove class 
    // pos3.classList.add('left');

    pos4.classList.remove('right');
    pos4.classList.add('current');

    // remove class 
    pos2.classList.remove('current');
    pos3.classList.remove('current');
    pos1.classList.remove('current');

    // add class 
    pos2.classList.add('right');
    pos3.classList.add('right');
    pos1.classList.add('right');
})


// touch swipe 
console.log("hi");
var touchsurface = document.getElementById('touchsurface'),
startX,
startY,
dist,
threshold = 200, //required min distance traveled to be considered swipe
allowedTime = 400, // maximum time allowed to travel that distance
elapsedTime,
startTime

function handleswipe(isrightswipe){
if (isrightswipe)
  if(pos1.classList.contains('current')){
    pos1.classList.remove('current');
    pos1.classList.add('right');
    pos2.classList.add('current');
  }
  else if(pos2.classList.contains('current')){
    pos2.classList.remove('current');
    pos2.classList.add('right');
    pos3.classList.add('current');
  }

 else  if(pos3.classList.contains('current')){
    pos3.classList.remove('current');
    pos3.classList.add('right');
    pos4.classList.add('current');
  }

//   else if(pos1.classList.contains('current')){
//     pos1.classList.remove('current');
//     pos1.classList.add('right');
//     pos2.classList.add('current');
//   }



// else{
//     touchsurface.innerHTML = 'Condition for right swipe not met yet'
// }
}

touchsurface.addEventListener('touchstart', function(e){
var touchobj = e.changedTouches[0]
dist = 0
startX = touchobj.pageX
startY = touchobj.pageY
startTime = new Date().getTime() // record time when finger first makes contact with surface
e.preventDefault()
}, false)

touchsurface.addEventListener('touchmove', function(e){
e.preventDefault() // prevent scrolling when inside DIV
}, false)

touchsurface.addEventListener('touchend', function(e){
var touchobj = e.changedTouches[0]
dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
elapsedTime = new Date().getTime() - startTime // get time elapsed
// check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 150)
handleswipe(swiperightBol)
e.preventDefault()
}, false)

