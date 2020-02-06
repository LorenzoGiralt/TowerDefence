// ---------------------------DATA GAMES--------------------------- //
var spritesIA = "soldat.png"; //Choice character img of soldier
    nbSoldier = 10; //Choice number of soldier parse wave
    towerDps = 2; //Choice number for attribute the dps
    steps = 1 + Math.floor(Math.random() *5) //Choice number for attribute the dps
    prefix = 'Soldier'; //Attribute name for create global var instance new soldier
    soldatX=0; 
    soldatY=200;
    range = 350;
    hpSoldat = 600;
// ---------------------------Creation of my generation class--------------------------- //
class Soldier {
    constructor(name,sx,sy,width,height,hp,speed,sprites,num) {
        this.name = name;this.sx = sx; this.sy = sy;this.width=width;this.height=height;this.hp = hp;this.speed = speed;this.sprites = sprites;
        this.num = num;
    }
}
// --------------------------Extends of my first Class--------------------------------- //
class Destructor extends Soldier {
    constructor(sx,sy,width,height,hp,speed,sprites) {
        super(sx,sy,width,height,hp,speed,sprites);
    }
}
// --------------------------Extends of my second Class--------------------------------- //
class Tower extends Destructor {
    constructor(attack) {
        super();
        this.attack=attack;
    }
    dps() {
        return 1 + Math.floor(Math.random() * towerDps)
    }
}
// -------------- creates global, Soldat + i = new instance of class ---------------------- //
for(var i = 0; i < nbSoldier; i++) {
    eval(prefix + i + `= new Soldier("Soldat : "+i,soldatX,soldatY,220,220,hpSoldat,steps,spritesIA,i)`) 
}
// --------------Data allocation of my class and initialization ---------------------- //
console.log(Soldier0)
var towerP = new Tower(2)

var soldierImg = new Image();
soldierImg.onload = animate;
soldierImg.src = Soldier0.sprites;


function animate(){ 
    draw();
    update();
    requestAnimationFrame(animate)
}

function draw() {
}
textX = 150;
textY =150
text = Soldier0.hp;
function update() {
    soldatX+= steps;
    ctx.clearRect(soldatX,soldatY,70,90)
    ctx.fillStyle = "white";
    ctx.clearRect(0, soldatY,900,20);
    
    drawSoldier()
    console.log(soldatX)
    if (soldatX >= width - ratio) {
        soldatX *= -1;
    }
    if (soldatX < 100) {
        Soldier0.hp = hpSoldat;
        scoreX+= parseInt(1);
        score.innerHTML = scoreX;
    }
  
    if(Soldier0.hp <= 0 && soldatX >= sXS+range && soldatX >= sXY) {
        console.log("Hors de portée du soldat mort")
        ctx.clearRect(soldatX,soldatY,70,90)
        ctx.fillStyle = "white";
        ctx.clearRect(0, soldatY,2000,200);
    }
     else if(Soldier0.hp >= 100 && soldatX >= sXS+range && soldatX >= sXY) {
        console.log("Hors de portée")
     }

            else if(sXS -200 <= soldatX && sXY -200 <= soldatY) {
        if(Soldier0.hp <= 0) {
         console.log("Wave gagné !")
         ctx.clearRect(soldatX,soldatY,70,90)
         ctx.fillStyle = "#333";
         ctx.clearRect(0, soldatY,900,20);

        }else if(Soldier0.hp >= 0) {
            console.log('Touché');
            Soldier0.hp -= towerP.dps();
            console.log("Hp du soldat de :" +Soldier0.hp)
        }
    }
}


function drawSoldier() {
    ctx.drawImage(soldierImg, soldatX, soldatY, 70, 90);
    ctx.font = "11px VonnesReg"; // different font
    ctx.fillStyle = "black";
    ctx.textBaseline = "top"; // text baseline at the top
    ctx.fillText(Soldier0.hp, soldatX, soldatY);
    console.log(soldatX)
}

console.log(Soldier0.hp)













