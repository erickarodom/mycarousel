let imageIndex = 1;
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');


// main logic - determines visible image

function visibleSlide(n){
  let slides = document.querySelectorAll('img');
  if(n > slides.length){
    imageIndex = 1;
  }
  if(n < 1){
    imageIndex = slides.length
  }
  for(i = 0; i< slides.length; i++){
    slides[i].style.display = "none";
   
  }
  console.log(imageIndex);
  slides[imageIndex-1].style.display = "block";
}

// next/prev button control - simulates triggering control of viewed slide

function selectSlide(n){
  visibleSlide(imageIndex += n);
}
nextButton.addEventListener('click',()=>{selectSlide(1); 
});
prevButton.addEventListener('click',()=>{selectSlide(-1);
});











