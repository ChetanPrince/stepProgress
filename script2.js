document.addEventListener("DOMContentLoaded",()=>{
    const progressContainer = document.querySelectorAll(".progress-container");
    const steps = document.querySelectorAll(".steps");
    let currentIndex = -1;

    function nextProgress(){
        if(currentIndex < progressContainer.length -1){
            currentIndex++;
            progressContainer[currentIndex].classList.add("show");
            steps[currentIndex].classList.add("show");
        }
    }
    function prevProgress(){
        if(currentIndex >=0){
            progressContainer[currentIndex].classList.remove("show");
            steps[currentIndex].classList.remove("show");
            currentIndex--;

        }
    }
    const nextBtn = document.getElementById("next");
    nextBtn.addEventListener("click", nextProgress);
    const previousBtn = document.getElementById("previous");
    previousBtn.addEventListener("click", prevProgress);
})