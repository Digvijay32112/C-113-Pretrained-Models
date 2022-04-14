function preload() {
    
    }
    
function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = ""; 
    }
    
function draw() {
    image(video, 0, 0, 600, 400);
    tint(tint_color);
}

function take_snapshot()
{
    save('studentname.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value
  
}