const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

let time = 0;

const sparkles = [];

for(let i=0;i<250;i++){

    sparkles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2+0.5,
        alpha:Math.random(),
        speed:(Math.random()*0.02)+0.01
    });

}

function drawOcean(){

    const gradient = ctx.createLinearGradient(0,0,0,canvas.height);

    gradient.addColorStop(0,"#27c7ff");
    gradient.addColorStop(.5,"#0097d6");
    gradient.addColorStop(1,"#005b8f");

    ctx.fillStyle=gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="rgba(255,255,255,.08)";
    ctx.lineWidth=2;

    for(let y=0;y<canvas.height+40;y+=40){

        ctx.beginPath();

        for(let x=0;x<canvas.width+30;x+=20){

            let yy=y+Math.sin((x*0.02)+time+y*0.03)*6;

            if(x===0)
                ctx.moveTo(x,yy);
            else
                ctx.lineTo(x,yy);

        }

        ctx.stroke();

    }

}

function drawSparkles(){

    for(const s of sparkles){

        s.alpha+=s.speed;

        if(s.alpha>1 || s.alpha<0){
            s.speed*=-1;
        }

        ctx.beginPath();

        ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

        ctx.fillStyle="rgba(255,255,255,"+(s.alpha*0.35)+")";

        ctx.fill();

    }

}

function update(){

    time+=0.02;

}

function render(){

    update();

    drawOcean();

    drawSparkles();

    requestAnimationFrame(render);

}

render();
