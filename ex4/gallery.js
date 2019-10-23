function showImg(e) {


   document.querySelector("#displayDIV .bigIMG").src=e.target.dataset.large;
   document.querySelector("#displayDIV .desc").innerHTML=e.target.alt;
   document.getElementById("displayDIV").style.display="block";
   document.getElementById("displayDIV").innerHTML += '<a id="prev" onclick="plusSlides(-1)" class="prev">&#10094;</a>' +
       '<a onclick="plusSlides(1)" class="next" id="next">&#10095;</a>'+
       '<button onclick="schliessen()" class="close" id="close">X</button>' +
       '<button onclick="slideShow()" class="close">Slideshow</button>'
   ;



}
let slideIndex = 0;



let images = document.querySelectorAll('.gallery img');
for (let i=0; i< images.length; i++) {
   images[i].addEventListener("click", showImg);
}



function schliessen() {
   document.getElementById("displayDIV").style.display="none";
}

// Next/previous controls
function plusSlides(n) {
   showSlides(slideIndex += n);
}


function showSlides(n) {


   if (n > images.length-1) {slideIndex = 0}
   if (n < 0) {slideIndex = images.length-1}
   console.log(slideIndex)
   document.querySelector("#displayDIV .bigIMG").src=images[slideIndex].dataset.large;
   document.querySelector("#displayDIV .desc").innerHTML= images[slideIndex].alt;

}

function slideShow() {
   plusSlides(1);
   if (document.getElementById("displayDIV").style.display==="block"){
      setTimeout(slideShow, 2000);

   }
}