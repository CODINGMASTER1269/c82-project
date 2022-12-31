canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastposition_x , lastposition_y;
color ="green";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    console.log(color);
    console.log(width_of_line);
    mouseEvent="mouseDown";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentposition_mouseX=e.clientX-canvas.offsetLeft;
    currentposition_mouseY=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){                                                                                                                                                    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;

        console.log("last Position of X and Y coordinates=  ");
        console.log("X=  "+ lastposition_x+"Y=  "+ lastposition_y);

        ctx.moveTo(lastposition_x,lastposition_y);
        console.log("current Position of X and Y coordinates=  ");
        console.log("X=  "+ currentposition_mouseX+"Y=  "+ currentposition_mouseY);

        ctx.lineTo(currentposition_mouseX,currentposition_mouseY);
        ctx.stroke();
    }
    lastposition_x=currentposition_mouseX;
    lastposition_y=currentposition_mouseY;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    
    mouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    
    mouseEvent="mouseLeave";
    
}


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
