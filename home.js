
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndexAuto++;
    if (slideIndexAuto > slides.length) {slideIndexAuto = 1}    
    slides[slideIndexAuto - 1].style.display = "block";  
    setTimeout(showSlidesAuto, 3000); 
}


let slideIndexManual = 1;


function plusSlides(n) {
    showSlidesManual(slideIndexManual += n);
}


function currentSlide(n) {
    showSlidesManual(slideIndexManual = n);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndexManual = 1;
    }    
    if (n < 1) {
        slideIndexManual = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndexManual - 1].style.display = "block";  
}

