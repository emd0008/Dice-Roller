var divCounter = 0;

function randomColor(){
    var redColor = Math.floor(Math.random() * 255);
    var greenColor = Math.floor(Math.random() * 255);
    var blueColor = Math.floor(Math.random() * 255);
    var colorResult = "rgb("+redColor+","+greenColor+","+blueColor+")";
    return colorResult;
}
document.addEventListener("DOMContentLoaded", function(){
    var btn = document.createElement("button");
    btn.innerHTML = "Click me";

    btn.addEventListener("click", function square(){
        var div = document.createElement("div");
        div.className = "square";
        div.id = divCounter++;
    
        document.body.appendChild(div);
        var idText = document.createTextNode(div.id);    
    
        div.addEventListener("click", function overlay(){
            div.style.width = "100px";
            div.style.height = "100px";
            div.style.background = randomColor();
        });

        div.addEventListener('mouseover', function hoverOver(){
            div.innerHTML = div.id;
        });

        div.addEventListener('mouseout', function hoverOut(){
            div.innerHTML = " ";
        });

        div.addEventListener('dblclick', function removeSquare(){
            if(div.id % 2 === 0 && div.nextSibling !== null && div.previousSibling.tagName !== "button"){
                div.nextSibling.remove();
            }else if(div.id % 2 !== 0 && div.previousSibling !== null && div.previousSibling.tagName !== "button"){
                div.previousSibling.remove();
            }else{
                alert("There is no element to remove!");
            }
        });
    });

    document.body.appendChild(btn);
});