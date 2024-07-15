const proContainers =document.querySelectorAll(".progress-container");
function progressAction(){
    proContainers.forEach(proContainer => {
        

            proContainer.classList.add("show");

    });
}
function progressActionReverse(){
    proContainers.forEach(proContainer => {
        
            proContainer.classList.remove("show");
      
        
    });
}


const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", progressAction);

const prevBtn = document.getElementById("previous");
prevBtn.addEventListener("click", progressActionReverse);