const proContainers =document.querySelectorAll(".progress-container");
        let currentIndex = -1;
        
function progressAction(){
        if(currentIndex <proContainers.length -1){
        currentIndex++;
        proContainers[currentIndex].classList.add("show");}
}


function progressActionReverse(){
    if(currentIndex >=0){
        proContainers[currentIndex].classList.remove("show");
        currentIndex--;
             } }


const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", progressAction);

const prevBtn = document.getElementById("previous");
prevBtn.addEventListener("click", progressActionReverse);


// 
// 
// 
// document.addEventListener('DOMContentLoaded', () => {
//     const proContainers = document.querySelectorAll('.progress-container');
//     let currentIndex = -1; 
//     function progressAction() {
//         if (currentIndex < proContainers.length - 1) {
//             currentIndex++;
//             proContainers[currentIndex].classList.add('show');
//         }    }

//     function progressActionReverse() {
//         if (currentIndex >= 0) {
//             proContainers[currentIndex].classList.remove('show');
//             currentIndex--;
//         }    }

//     const nextBtn = document.getElementById('next');
//     nextBtn.addEventListener('click', progressAction);

//     const prevBtn = document.getElementById('previous');
//     prevBtn.addEventListener('click', progressActionReverse);
// });