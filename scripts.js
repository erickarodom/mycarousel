let images = document.querySelectorAll('img');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
let currentImage = document.getElementsByClassName('active');
let firstSlide = document.getElementById('slide-1');


// previousButton.addEventListener('click', function(){
// if(previousButton.style.backgroundColor !== 'red' ){
//   previousButton.style.backgroundColor = 'red';
// } else {
//   previousButton.style.backgroundColor = 'black';
// }
// });

previousButton.addEventListener('click', ()=>{
firstSlide.classList.remove('active');
images[2].classList.add('active');



});
