document.body.style.fontSize = "25px";

function incrementFontSize(size) {
    return function() {
        const computedFontSize = getComputedStyle(document.body).fontSize;
        const actualFontSize = +computedFontSize.replace("px", "");

        const newFontSize = actualFontSize + size + "px";
        document.body.style.fontSize = newFontSize;
    }
}
const fontAdd = incrementFontSize(1);

function decrementFontSize(size) {
    return function() {
        const computedFontSize = getComputedStyle(document.body).fontSize;
        const actualFontSize = +computedFontSize.replace("px", "");

        const newFontSize = actualFontSize - size + "px";
        document.body.style.fontSize = newFontSize;
    }
}

const fontDecrease = decrementFontSize(1);