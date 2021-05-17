var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

const FPS = 60;
const BALLNUM = 10;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

function ball(y,r,s){
    this.xStart = -randomNumber(300,3000);
    console.log(this.xStart);
    this.x = this.xStart;
    this.y = y;
    this.r = r;
    this.speed = s;
    this.speedx=1;
    this.o = randomNumber(1,3);

}

setInterval(main,1000/FPS);
function main(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateClouds();    
}

balls = [];

function createBall(speed){
    b = new ball(randomNumber(0,(window.innerHeight)),randomNumber(100,300),speed);
    balls.push(b);
}

function createCloud(){
    for (x=0;x<BALLNUM;x++){
        createBall(2);
    }
}

createCloud();

function updateClouds(){

    for (x=0;x<balls.length;x++){
        balls[x].x += balls[x].speed;

        if (balls[x].x > window.innerWidth + (balls[x].r * 2)){
            balls[x].x =  -randomNumber(300,3000);
            balls[x].y = randomNumber(0,(window.innerHeight));
            balls[x].o = randomNumber(1,3);
        }

        ctx.beginPath();
        ctx.arc(balls[x].x,balls[x].y, balls[x].r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 255, 255, 0." + balls[x].o + ")";
        ctx.fill();
    }
}


function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}