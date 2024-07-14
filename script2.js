const proContainers =document.querySelectorAll(".progress-container");
function progressAction(){
    proContainers.forEach(proContainer => {
        proContainer.classList.add("show");
    });
}


const btnProgress = document.getElementById("next-button");

btnProgress.addEventListener("click", progressAction)