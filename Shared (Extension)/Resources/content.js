let color = '#212529'; // Keeping gray as default on first page load

const invertColor = (hex) => {
    // Function to invert the given color from dark to light and vice versa
    hex = hex.replace(/^#/, '');
    let r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    let g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    let b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    
    r = r.length === 1 ? '0' + r : r;
    g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;
    
    return `#${r}${g}${b}`;
};

const changeColor = () => {
    const invertedColor = invertColor("#ffffff");
    
    document.querySelector("body").style.background = invertedColor;
    document.querySelector("#content").style.background = invertedColor;
    document.querySelector('table.infobox').style.background = invertedColor;
    document.querySelector("body").style.color = "#ffffff";
    
    const elementsToInvert = document.querySelectorAll("p, div, span, a, h1, h2, h3, h4, h5, h6, form");
    elementsToInvert.forEach((element) => {
        const colorInverted = invertColor("#000000");
        element.style.color = `${colorInverted} !important`;
        console.log("inverted");
    });
};

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.color) {
        color = request.color;
        changeColor();
    }
});

changeColor();
