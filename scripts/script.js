let slideIndex = 0;
let slides = document.getElementsByClassName("slides");
showSlides(slideIndex);

let playlist = document.getElementById("playlist");
playlist.volume = 0.2;

function plusSlides(num) {
    slideIndex += num;
    if (slideIndex > slides.length - 1) {slideIndex = 0;}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
}

function showSlides(slideNo) {
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideNo].style.display = "block";

}

// when music finishes, plusSlides by 1.