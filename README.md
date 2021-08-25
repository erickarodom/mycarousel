# My JavaScript Image Slider
Building an image slider is a great place to start when learning vanilla javascript.
It is about on the same level as a ToDo list and when you are first learning the DOM and 
trying to get your head around some logic it seems hard and confusing.  We all start with these
projects that seem so easy when we are more experienced but are quite daunting when we are starting out.
## Guide
This is not a fancy slider & the code is not the prettiest.  My goal was to build a slider on my own without following a tutorial.
My benchmark for success was having a working slider. I wanted the process to be my success and that meant that anything I had to do, lookup, learn, 
review or borrow (as long as I understood what I was borrowing) would be the point of this exercise.

### Psuedo Code
- Click through a group of images one at a time by selecting or assigning 
and "active" slide by clicking one of two buttons.
- Clicking a button should select a new slide (next) or an older slide (previous).
- Only one image should be displayed at a time.
- The final result is the illusion of an image sliding or fading into view, controlled by pressing one of
two buttons.
### 'Aha' moments
- CSS class creation & assignment is the foundation of the illusion. 
  - a class assigned to all images with {display:none} is the foundation.
- The DOM isn't so scary.
  - you only need two - four DOM properties & methods to start.
  - for this I used *document.getElementById(), document.querySelectorAll() & addEventListener()*
- **VariableName.length** this is one of those things that seems soooooo simple for those that coding comes easily to.
  - .length property is often used to establish the *existense* of something  *(i.e x is === object.length, is checking for existence)*.
  - it is often our stopping condition in a for loop  *for(i = 0; i< slides.length; i++)*
  - it can be used as a condition in a conditional   *if(n > slides.length){
                                                     imageIndex = 1;
                                                    }*
## Final Thoughts
Feel free to use this code as a place to start your own journey.
There are comments explaining the logic in the code.
I used parcel.js as my bundler and other than that its just HTML, CSS & JS




