document.getElementById("adauga").addEventListener("click", function() {
    
    var elementType = document.getElementById("element").value;
    var textColor = document.getElementById("culoare-text").value;
    var bgColor = document.getElementById("culoare-background").value;
    

    var newElement;
    if (elementType === "box" || elementType === "cerc") {
        newElement = document.createElement("div");
        newElement.style.width = "100px";
        newElement.style.height = "100px";
        newElement.style.backgroundColor = bgColor;
        newElement.style.border = `2px solid ${textColor}`;
        if (elementType === "cerc") {
            newElement.style.borderRadius = "50%";
        }
    } else {
        newElement = document.createElement(elementType);
        newElement.style.color = textColor;
        newElement.style.backgroundColor = bgColor;
        newElement.textContent = `Acesta este un ${elementType} element.`;
    }

    
    document.getElementById("parinte").appendChild(newElement);
});
