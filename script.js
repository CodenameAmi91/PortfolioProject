
// scroll to top

let mybutton = document.getElementById("myBtn");

window.onscroll = () => { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



// introduction

const introText = "Hello! I am Amira Bature.";

let index = 0;
function displayIntro () {
  document.getElementById("intro").innerHTML= introText.slice (0,index);
  index ++;

  // if (index > introText.length ) {
  //   index = 0;
  // }
}

setInterval(displayIntro,100);

// hobbies

let hobbies = ["travelling to new places", "cooking different meals"]

let i = 0;

function myHobbies() {
  document.getElementById("hobbies").innerHTML= hobbies[i++];

  if (i == hobbies.length ) {
    i = 0;
  }
}

setInterval(myHobbies,2000);

