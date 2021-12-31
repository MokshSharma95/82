canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color =document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

function my_mousemove(e)
{
    current_position_of_mouse_x =e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y =e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + cureent_position_of_mouse_x + "y = " + 
        current_position_of_mouse_y);
        ctx.begainPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius , 0,2 *Math.PI);
        ctx.stroke();
    }

}

function my_mouseup(e)
{
    color =document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseup";
}

function my_mousemove(e)
{
    current_position_of_mouse_x =e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y =e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseup") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + cureent_position_of_mouse_x + "y = " + 
        current_position_of_mouse_y);
        ctx.begainPath();
        ctx.strokeStyle=color;
        ctx.linewidth=width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius , 0,2 *Math.PI);
        ctx.stroke();
    }

}