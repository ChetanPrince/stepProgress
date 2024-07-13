
function progressAction(){
    const container = document.getElementById("container");
    let style = document.querySelector('style#dynamic-styles');
    if (!style) {
        style = document.createElement('style');
        style.id = 'dynamic-styles';
        document.head.appendChild(style);
    }
    const sheet = style.sheet;

    // Remove the existing rule if it exists
    for (let i = 0; i < sheet.cssRules.length; i++) {
        if (sheet.cssRules[i].selectorText === "#container:after") {
            sheet.deleteRule(i);
            break;
        }
    }

    // Add the CSS rule for the :after pseudo-element
    sheet.insertRule("#container:after { animation: anim 5s linear forwards; content: ' '; }", sheet.cssRules.length);

    // Trigger reflow to restart animation (important for the second click to work)
    container.offsetHeight;
}


const btnProgress = document.getElementById("next-button");

btnProgress.addEventListener("click", progressAction)