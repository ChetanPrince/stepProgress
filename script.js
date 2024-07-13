
function progressAction(){
    const container = document.getElementById("container");
    const style = document.createElement("style");
    document.head.appendChild(style);
    const sheet = style.sheet;

    if ("insertRule" in sheet) {
        sheet.insertRule("#container:after { animation: anim 5s linear forwards; content: ' '; }", sheet.cssRules.length);
    } else if ("addRule" in sheet) {
        sheet.addRule("#container:after", "animation: anim 5s linear forwards; content: ' ';", sheet.cssRules.length);
    }
}


const btnProgress = document.getElementById("next-button");

btnProgress.addEventListener("click", progressAction)