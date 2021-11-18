var mouseEvent="empty";
var last_x,last_y;

canvas=document.getElementById("canvas");

ctx=canvas.getContext("2d");

colour="hotpink";
width_line=1;

canvas.addEventListener("mousedown", my_mousedown );

function my_mousedown(e) {
    colour=document.getElementById("input_colour").value;
    width_line=document.getElementById("input_width").value;

    console.log(colour);
    console.log(width_line);
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove );

function my_mousemove(e){
    current_x =e.clientX - canvas.offsetLeft;
    current_y =e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidth=width_line;
        ctx.arc(current_x,current_y,40,0,2*Math.PI)
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}

    
canvas.addEventListener("mouseup", my_mouseup );

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave );

function my_mouseleave(e){
    mouseEvent="mouseleave";
}


function clearing() {
    console.log("trying to clear1");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    console.log("trying to clear2");
}



