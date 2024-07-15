// const proContainers =document.querySelectorAll(".progress-container");
// function progressAction(){
//     proContainers.forEach(proContainer => {
//         let count = 0;

//                 proContainer.classList.add("show");

//     });
// }
// function progressActionReverse(){
//     proContainers.forEach(proContainer => {
        
//             proContainer.classList.remove("show");
      
        
//     });
// }


// const nextBtn = document.getElementById("next");
// nextBtn.addEventListener("click", progressAction);

// const prevBtn = document.getElementById("previous");
// prevBtn.addEventListener("click", progressActionReverse);



document.addEventListener('DOMContentLoaded', () => {
    const proContainers = document.querySelectorAll('.progress-container');
    let currentIndex = -1; // Start with -1 because no step is shown initially

    function progressAction() {
        // Check if there's a next step to show
        if (currentIndex < proContainers.length - 1) {
            currentIndex++;
            proContainers[currentIndex].classList.add('show');
        }
    }

    function progressActionReverse() {
        // Check if there's a previous step to hide
        if (currentIndex >= 0) {
            proContainers[currentIndex].classList.remove('show');
            currentIndex--;
        }
    }

    const nextBtn = document.getElementById('next');
    nextBtn.addEventListener('click', progressAction);

    const prevBtn = document.getElementById('previous');
    prevBtn.addEventListener('click', progressActionReverse);
});