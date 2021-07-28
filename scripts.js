// this variable is 1 instead of 0 because it is part of the conditional that creates a continuos loop for the slider. 0 (min) is the opposite spectrum of slides.length (max) when we establish the loop point for the next/prev button effect.
let imageIndex = 1;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

// main logic - determines visible image
function visibleSlide(n){
  let i;
  let slides = document.querySelectorAll('img');
  if(n > slides.length){
    imageIndex = 1;
  }
  if(n < 1){
    imageIndex = slides.length
  }
  // the default css only establishes the initial display of the slides. The loop conitnuosly assigns the display status dynamically. Without looping through on every click, the images would stay assigned as block elements.
  for(i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
  }
  // this line of code equates to the native index
  slides[imageIndex-1].style.display = "block";
  }
  // next/prev button control - simulates triggering control of desired slide
function selectSlide(n){
  visibleSlide(imageIndex += n);
  }

nextButton.addEventListener('click',()=>{selectSlide(1); 
});
prevButton.addEventListener('click',()=>{selectSlide(-1);
});











