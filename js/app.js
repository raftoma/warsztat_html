document.addEventListener("DOMContentLoaded", function(event) {
    var prev = document.querySelector(".banner-prev");
    var next = document.querySelector(".banner-next");
    var slides = document.querySelectorAll(".banner-slide");
    var index = 0;
    slides[index].classList.add("banner-slide-active");


    function clickPrev(event){
        slides[index].classList.toggle("banner-slide-active");
        index--;

        if(index < 0){
            index = slides.length -1;
        }
        slides[index].classList.toggle("banner-slide-active");
    }

    function clickNext(event){
        console.log("Kliknąłeś next");
        slides[index].classList.toggle("banner-slide-active");
        index++;
        if(index >= slides.length){
            index = 0;
        }
        slides[index].classList.toggle("banner-slide-active");
        console.log(index);
    }

    prev.addEventListener("click", clickPrev);
    next.addEventListener("click", clickNext);



});